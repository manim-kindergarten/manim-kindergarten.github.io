<script setup lang="ts">
import type { CardData } from '~/data/CardData'
import { downloadPath } from '~/data/downloadPath'

const { t } = useI18n()

const data: CardData[] = [
  {
    title: 'docs.chinese-tutorial-document.title',
    description: 'docs.chinese-tutorial-document.description',
    action: [{ label: 'Go', icon: 'i-ri-external-link-line', url: 'https://docs.manim.org.cn' }],
  },
  {
    title: 'docs.persuade-to-quit-manim.title',
    description: 'docs.persuade-to-quit-manim.description',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/problems/persuade2quit' },
      { label: 'Download', icon: 'i-carbon-download', url: `${downloadPath}/download/persuade2quit/manim%E4%BB%8E%E6%B2%A1%E5%85%A5%E9%97%A8%E5%88%B0%E8%A2%AB%E5%8A%9D%E9%80%80v1.0.pdf` }],
    previous: [
      { label: 'v0.1-beta', link: `${downloadPath}/download/persuade2quit/manim%E4%BB%8E%E6%B2%A1%E5%85%A5%E9%97%A8%E5%88%B0%E8%A2%AB%E5%8A%9D%E9%80%80v0.1-beta.pdf` },
      { label: 'v0.2-beta', link: `${downloadPath}/download/persuade2quit/manim%E4%BB%8E%E6%B2%A1%E5%85%A5%E9%97%A8%E5%88%B0%E8%A2%AB%E5%8A%9D%E9%80%80v0.2-beta.pdf` }],
  },
  {
    title: 'docs.manimgl-faq.title',
    description: 'docs.manimgl-faq.description',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/problems/manimgl' },
      { label: 'Download', icon: 'i-carbon-download', url: `${downloadPath}/download/manimgl-faq/manimgl%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v1.2.pdf` }],
    previous: [
      { label: 'v1.1', link: `${downloadPath}/download/manimgl-faq/manimgl%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v1.1.pdf` },
      { label: 'v1.0', link: `${downloadPath}/download/manimgl-faq/manimgl%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v1.0.pdf` }],
  },
  {
    title: 'docs.manim-cairo-faq.title',
    description: 'docs.manim-cairo-faq.description',
    action: [
      { label: 'Go', icon: 'i-ri-links-fill', url: '/problems/manim-cairo' },
      { label: 'Download', icon: 'i-carbon-download', url: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v3.1.pdf` },
    ],
    previous: [
      { label: 'v3.0', link: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v3.0.pdf` },
      { label: 'v2.3', link: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v2.3.pdf` },
      { label: 'v2.2', link: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v2.2.pdf` },
      { label: 'v2.1', link: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v2.1.pdf` },
      { label: 'v2.0', link: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v2.0.pdf` },
      { label: 'v1.1', link: `${downloadPath}/download/manim-faq/manim%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98v1.1.pdf` },
    ],
  },
  {
    title: 'docs.manim-with-vscode.title',
    description: 'docs.manim-with-vscode.description',
    action: [{ label: 'Go', icon: 'i-ri-external-link-line', url: 'https://blog.gztime.cc/posts/2021/758c52ab/' }],
  },
  {
    title: 'docs.manim-usage-changes.title',
    description: 'docs.manim-usage-changes.description',
    action: [{ label: 'Go', icon: 'i-ri-links-fill', url: '/problems/new_usage' },
      { label: 'Download', icon: 'i-carbon-download', url: `${downloadPath}/download/%E6%96%B0%E7%89%88manim%E7%94%A8%E6%B3%95%E5%8F%98%E5%8C%96v1.0.pdf` }],
  },
  {
    title: 'docs.structure-gl.title',
    description: 'docs.structure-gl.description',
    action: [
      { label: 'Download', icon: 'i-carbon-download', url: `${downloadPath}/download/manimgl%E7%BB%93%E6%9E%84.pdf` }],
  },
  {
    title: 'docs.structure-cairo.title',
    description: 'docs.structure-cairo.description',
    action: [
      { label: 'Download', icon: 'i-carbon-download', url: `${downloadPath}/download/manim%E7%BB%93%E6%9E%84.pdf` }],
  },
]
</script>

<template>
  <Card
    v-for="(it, i) in data"
    :key="i"
    :title="t(it.title)"
    :description="t(it.description)"
    :action="it.action"
    :previous="it.previous"
    :delay="i"
  />
</template>
