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
            sentFrom: {
                name: 'Google',
                address: 'google@gmail.com'
            },
            subject: 'Looking for a job? we want u!',
            body: 'We heard a lot about Dana and Opal and we will do anything to have u with us! money?? not a problem, we got it!',
            sentAt: new Date(1551133930594),
            isRead: false,
            isStared: false,
        },
        {
            id: utilsService.getRandomId(),
            createdAt: Date.now(),
            sentFrom: {
                name: 'Google',
                address: 'google@gmail.com'
            },
            subject: 'Looking for a job? we want u!',
            body: 'We heard a lot about Dana and Opal and we will do anything to have u with us! money?? not a problem, we got it!',
            sentAt: new Date(1551133930594),
            isRead: false,
            isStared: false,
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

function updateEmailRead(emailId, status){
    getEmailById(emailId)
        .then((email)=>{
            console.log('EMAIL IS READ',email.isRead);
            //if status is true=> mark as read
            //if status is false=> toggle read
            status ? email.isRead = true : email.isRead= !email.isRead
            console.log('EMAIL IS READ',email.isRead);
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
    gEmails.map(email=>{
        if (!email.isRead) unreadCount++
    })
    if (unreadCount === 0) unreadCount='0'
    return Promise.resolve(unreadCount);
}