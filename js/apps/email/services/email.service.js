export const emailService = {
    getEmails
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