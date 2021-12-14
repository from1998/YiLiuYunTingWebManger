import defaultSettings from '@/settings'

const title = defaultSettings.title || '一流云停|停车管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} : ${title}`
  }
  return `${title}`
}
