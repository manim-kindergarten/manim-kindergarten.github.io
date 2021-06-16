import platform
import subprocess
import distro
import os
import pathlib
import sys
import re


def check_ffmpeg_binary(platform, system_paths):
    print("[ffmpeg]\t", end="")
    error = 1

    if platform == "Windows":
        for syspath in system_paths:
            try:
                program_path = pathlib.Path(syspath) / "ffmpeg.exe"
                if program_path.is_file():
                    print(f"binary found {program_path}")
                    error = 0
                    break
            except OSError:
                pass

    elif platform in _debian_variants:
        ffmpeg_check = subprocess.run(["which", "ffmpeg"], capture_output=True)
        if ffmpeg_check.stdout:
            print(f"binary found {ffmpeg_check.stdout.strip().decode()}")
            error = 0
        else:
            print("\033[1;31;40m not found in system path\033[0;37;40m.")

    elif platform == "Darwin":
        pass

    elif platform not in _supported_distros:
        raise NotImplementedError("Your distro is not supported at the moment")

    return error


def check_latex_binary(platform, system_paths):
    print("[xelatex]\t", end="")
    error = 1

    if platform == "Windows":
        for syspath in system_paths:
            try:
                program_path = pathlib.Path(syspath) / "xelatex.exe"
                if program_path.is_file():
                    print(f"binary found {program_path}")
                    error = 0
                    break
            except OSError:
                pass

    elif platform in _debian_variants:
        latex_check = subprocess.run(["which", "xelatex"], capture_output=True)
        if latex_check.stdout:
            print(f"binary found {latex_check.stdout.strip().decode()}")
            error = 0
        else:
            print("\033[1;31;40m not found in system path\033[0;37;40m")

    elif platform == "Darwin":
        pass

    elif platform not in _supported_distros:
        raise NotImplementedError("Your distro is not supported at the moment")

    return error



def check_libcairo(platform):
    print("[libcairo]\t", end="")
    error = 1

    libcairo_check = subprocess.run(["dpkg", "-s", "libcairo2-dev"], capture_output=True)
    if "install ok installed" in libcairo_check.stdout.decode():
        print("libcairo2-dev ok")
        error = 0
    else:
        print("libcairo2-dev not found")

    return error


def check_latex_packages():
    test_template = r"""\documentclass[preview]{standalone}
\usepackage[UTF8]{ctex}
\usepackage{test_package}
\begin{document}
Test
\end{document}
"""
    packages = [
        "babel",
        "amsmath",
        "amssymb",
        "dsfont",
        "setspace",
        "tipa",
        "relsize",
        "textcomp",
        "mathrsfs",
        "calligra",
        "wasysym",
        "ragged2e",
        "physics",
        "xcolor",
        "microtype",
    ]

    for package in packages:
        with open("xelatex_package_test.tex", "w", encoding="utf8") as fout:
            test = test_template.replace("test_package", package)
            fout.write(test)
        print(f"Testing xelatex package {package:<15} ", end="")
        test_run = subprocess.run(
            ["xelatex", "-no-pdf", "-interaction=batchmode", "xelatex_package_test.tex"],
            capture_output=True
        )
        if test_run.returncode == 0:
            print("ok")
        else:
            print("failed")
            print("printing error log")
            with open("xelatex_package_test.log", "r") as logfile:
                log = logfile.read()
            error_regex = re.compile(r"!(.*\n){5}")
            m = error_regex.search(log)
            for line in m.group().split("\n"):
                print(line)

    print("Clean up testing artifacts...", end="")
    os.remove("xelatex_package_test.aux")
    os.remove("xelatex_package_test.xdv")
    os.remove("xelatex_package_test.log")
    os.remove("xelatex_package_test.tex")
    print("done")


def check_python_dep(_platform):
    from importlib import import_module

    error = 0
    python_modules = [
        "argparse",
        "colour",
        "numpy",
        "PIL",
        "progressbar",
        "scipy",
        "tqdm",
        "cairo",
        "pydub",
        "pygments",
    ]
    if _platform == "Windows":
        python_modules += ["pyreadline"]
    for module in python_modules:
        try:
            import_module(module)
            print(f"{module:<15} ok")
        except ImportError as e:
            print(f"{module:<15} failed")
            error = 1
        except ModuleNotFoundError as e2:
            print(f"{module:<15} not found")
            error = 1

    return error


if __name__ == "__main__":
    import time

    _platform = platform.system()

    _debian_variants = ["ubuntu", "debian", "kubuntu", "xubuntu"]
    _redhat_variants = ["fedora", "centos", "redhat"]
    _suse_variants = ["suse", "opensuse"]
    _arch_variants = ["arch", "manjaro", "antegro"]
    _supported_distros = [
        "Windows"
    ] + _debian_variants  # add distro list to this list when implemented

    if _platform == "Linux":
        syspaths = os.environ["PATH"].split(":")
    elif _platform == "Windows":
        syspaths = os.environ["Path"].split(";")
    elif _platform == "Darwin":
        syspaths = os.environ["PATH"].split(":")
        raise NotImplementedError(
            "Dependency check for MacOS not implemented at the moment\nPatches are welcome."
        )
        sys.exit(0)

    print("\n===Manim dependency Check===\n")
    print(f"Minimal python version 3.6 is required")
    print(f"Current python version {platform.python_version()}")

    print("\n===Checking for required system libraries===\n")
    ffmpeg_fail = check_ffmpeg_binary(_platform, syspaths)
    latex_fail = check_latex_binary(_platform, syspaths)
    if _platform in _debian_variants:
        libcairo_fail = check_libcairo(_platform)
    else:
        libcairo_fail = 0
    print("\n===Checking for python package dependencies===\n")
    python_dep_fail = check_python_dep(_platform)
    print("\n===Checking for latex package dependencies===\n")
    latex_package_fail = check_latex_packages()

    if any([ffmpeg_fail, latex_fail, libcairo_fail, python_dep_fail, latex_package_fail]):
        print("\n===Possible diagnosis===\n")
        if ffmpeg_fail:
            if platform == "Windows":
                print("ffmpeg not found, please install it via https://ffmpeg.org/download.html")
                print(
                    "and make sure the bin directory which ffmpeg.exe resides is included in your system variable path"
                )
            if platform == _debian_variants:
                print("ffmpeg not found, please install it: apt install ffmpeg")
        if latex_fail:
            if platform == "Windows":
                print("latex on Windows is distributed via latex distribution")
                print("You can choose use MiKTeX or TeXLive")
                print("A full installation is recommended")
                print(
                    "make sure the bin/x64 directory which xelatex.exe resides is included in your system variable path"
                )
            if platform == _debian_variants:
                print("xelatex not found, please install it via: apt install texlive-full")
        if libcairo_fail:
            print("libcairo missing, please install it: apt install libcairo libcairo2-dev")
        if python_dep_fail:
            print("Some or all of the required python packages are missing")
            print("Please install the required package: pip install -r requirement.txt")
            print(
                "For pycairo on Windows use the gohlke binary: https://www.lfd.uci.edu/~gohlke/pythonlibs/#pycairo"
            )
        if latex_package_fail:
            if platform == "Windows":
                print(
                    "Some xelatex packages are missing, please check the latex package manager for missing packages"
                )
            if platform == _debian_variants:
                print(
                    "Some xelatex packages are missing, a full latex install is recommended: apt install texlive-full"
                )
    else:
        print("\n===All dependencies are satisfied===\n")