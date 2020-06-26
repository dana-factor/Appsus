export const emailService = {
    getEmails,
    getEmailById,
    getNextEmailId,
    getPrevEmailId,
    toggleEmailStared,
    removeEmail,
    updateEmailRead,
    getUnreadCount
};

import { storageService } from '../../../services/storage.service.js'
import { utilsService } from '../../../services/utils.service.js'

const KEY = 'emails'

var gEmails = _createEmails();

function _createEmails() {
  let emails = storageService.loadFromStorage(KEY);
  if (!emails || emails.length === 0) {
    emails = [
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Google',
                address: 'google@gmail.com'
            },
            subject: 'Looking for a job? we want u!',
            body: 'We heard a lot about Dana and Opal and we will do anything to have u with us! money?? not a problem, we got it!',
            sentAt: 1593166082226,
            isRead: false,
            isStared: false,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Coding Academy',
                address: 'ca@gmail.com'
            },
            subject: 'So good you can teach us',
            body: 'It was an honor to be a part of your progress',
            sentAt: 1593166082126,
            isRead: false,
            isStared: false,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Bill Gates',
                address: 'dont-kill-bill@gmail.com'
            },
            subject: 'U inspire me, thank u!',
            body: 'Micro-who right?? (:',
            sentAt: 1593166082026,
            isRead: false,
            isStared: false,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'God',
                address: 'jews-rule@heaven.com'
            },
            subject: 'In Opal and Dana I trust',
            body: 'Sorry to bother u again, but I need some coding advice, let me know when we can meet again',
            sentAt: 1551133930784,
            isRead: true,
            isStared: true,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Rabin',
                address: 'peace&love.com'
            },
            subject: 'I wish I was alive to see u',
            body: 'Peace out',
            sentAt: 1551133930599,
            isRead: true,
            isStared: true,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Mark Zuckerberg',
                address: 'bookface@facebook.com'
            },
            subject: 'Why won\'t u approve my friend request?',
            body: 'I swear facebook is still cool',
            sentAt: 1551133930574,
            isRead: false,
            isStared: true,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Chuck Norris',
                address: 'all-mighty@punch.com'
            },
            subject: 'If u can\'t beat them join them..',
            body: 'The dinosaurs looked at Dana and Opal the wrong way once. You know what happened to them',
            sentAt: 1551133960594,
            isRead: true,
            isStared: true,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Lorem Ipsum',
                address: 'nonsense@bla.com'
            },
            subject: 'Sometimes I feel like I have no meaning',
            body: 'But then I try to remember that lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            sentAt: 1551134930594,
            isRead: true,
            isStared: true,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Victoria',
                address: 'shhh@secret.com'
            },
            subject: 'I think i\m ready to tell you my secret',
            body: 'I have been keeping it to myself for a long time, but I know u can help me.. A long time ago I lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            sentAt: 1551133930514,
            isRead: true,
            isStared: true,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentTo: 'factor.dana@gmail.com',
            sentFrom: {
                name: 'Ex-boyfriends',
                address: 'not@enough.com'
            },
            subject: 'Where did we go wrong?',
            body: 'Cant believe it\'s over..',
            sentAt: 1551133920594,
            isRead: false,
            isStared: true,
        },
    ];
    storageService.saveToStorage(KEY, emails);
  }
  return emails;
}

function getEmails() {
    return Promise.resolve(gEmails);
}

function getEmailById(id) {
    const email = gEmails.find((email) => email.id === id);
    return Promise.resolve(email);
}

function getNextEmailId(emailId) {
    let idx = gEmails.findIndex(email =>email.id === emailId)
    if (idx === gEmails.length-1 ) idx = 0
    else idx = idx + 1;
    return Promise.resolve(gEmails[idx].id)
}
  
function getPrevEmailId(emailId) {
    let idx = gEmails.findIndex(email =>email.id === emailId)
    if (idx === 0 ) idx = gEmails.length-1
    else idx = idx - 1;
    return Promise.resolve(gEmails[idx].id)
}

function toggleEmailStared(emailId){
    getEmailById(emailId)
        .then((email)=>{ 
            email.isStared = !email.isStared
            storageService.saveToStorage(KEY, gEmails)
        })
}

// function updateEmailRead(emailId, status){
//     getEmailById(emailId)
//         .then((email)=>{
//             //if status is true=> mark as read
//             //if status is false=> toggle read
//             status ? email.isRead = true : email.isRead= !email.isRead
//             storageService.saveToStorage(KEY, gEmails)
//                 return Promise.resolve(email)
//         })
// }
function updateEmailRead(emailId, status){
    getEmailById(emailId)
        .then((email)=>{
            //if status is true=> mark as read
            //if status is false=> toggle read
            status ? email.isRead = true : email.isRead= !email.isRead
            storageService.saveToStorage(KEY, gEmails)
        })
}

function removeEmail(emailId){
    let idx = gEmails.findIndex(email =>email.id === emailId)
    gEmails.splice(idx, 1)
    storageService.saveToStorage(KEY, gEmails)
}

function getUnreadCount(){
    let unreadCount = 0;
    gEmails.forEach(email=>{
        if (!email.isRead) unreadCount++
    })
    if (unreadCount === 0) unreadCount='0'
    return Promise.resolve(unreadCount);
}