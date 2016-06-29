const TRINEO_GROUP_URL = '/group/22ZMCS'
const LOGO_URL = chrome.extension.getURL('images/trineo-logo.png')

let profileLink = document.querySelector('a.nav-item-profile')
let groupLink = profileLink.cloneNode(true)
let image = groupLink.querySelector('img')

groupLink.classList.remove('nav-item-profile')
groupLink.classList.add('hidden')
groupLink.href = TRINEO_GROUP_URL
groupLink.title = 'View Trineo group'

image.onLoad = (event) => groupLink.removeClass('hidden')
image.src = LOGO_URL

profileLink.parentNode.insertBefore(groupLink, profileLink.nextSibling)
