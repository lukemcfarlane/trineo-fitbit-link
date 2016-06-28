const LINK = '/group/22ZMCS'
const PHOTO_URL = chrome.extension.getURL('images/trineo-logo.png')

$(document).ready(() => {
  let $profileLink = $('a.nav-item-profile')
  let $groupLink = $profileLink.clone()
    .removeClass('nav-item-profile')
    .addClass('nav-item-group')
    .addClass('hidden')
    .attr('href', LINK)
    .attr('title', 'View Trineo group')
  let photo = $groupLink.find('img.photo')
    .attr('src', PHOTO_URL)
    .load(() => {
      $groupLink.removeClass('hidden')
    })
  $profileLink.after($groupLink)
})
