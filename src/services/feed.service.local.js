import { storageService } from './storage.service'

const KEY = 'feedDB'


export const feedService = {
    query,
    removeNote,
    addNote,
    getNoteById,
    onUpdatedNote,

};


_createNotes()

function query(filterBy = null) {
    const feeds = _loadFromStorage()
    if (!filterBy) return Promise.resolve(feeds)
    const filteredNotes = _getFilteredNotes(feeds, filterBy)
    return Promise.resolve(filteredNotes)

}

function _createNotes() {
    var feeds = _loadFromStorage();
    if (!feeds || !feeds.length) {
        feeds = [
            {
                id: makeId(),
                email: 'blabla@gmail.com',
                avatar: 'url.com/123.jpg',
                comment: 'yofi yofi'
            },
            {
                id: makeId(),
                email: 'blabls@gmail.com',
                avatar: 'url.com/123.jpg',
                comment: 'yofi yoti'
            },

        ]
        _saveToStorage(feeds);
    }
    return feeds;
}


// function removeNote(id) {
//     var feeds = _loadFromStorage();
//     const feedIdx = feeds.findIndex((feed) => feed.id === id);
//     feeds.splice(feedIdx, 1);
//     _saveToStorage(feeds);
//     return Promise.resolve(feeds);
// }



function addNote(userNote) {
    var feeds = _loadFromStorage();

    if (userNote.type === 'feed-todos') {
        let userNoteEdit = userNote.info.todos.map(todo => {
            return {
                txt: todo,
                doneAt: null,
                id: utilService.makeId()
            }
        });
        console.log(userNoteEdit)
        userNote.info.todos = userNoteEdit
    }

    feeds.unshift(userNote);
    _saveToStorage(feeds);
    return Promise.resolve(feeds);
}

function getNoteById(feedId) {
    var feeds = _loadFromStorage();
    var feed = feeds.find(function (feed) {
        return feedId === feed.id
    })
    return Promise.resolve(feed)
}

function onUpdatedNote(updatedNote) {
    let feeds = _loadFromStorage()
    let feedIdx = feeds.findIndex((feed) => feed.id === updatedNote.id)
    feeds[feedIdx] = updatedNote
    _saveToStorage(feeds)
    return Promise.resolve(feeds)
}

function _getFilteredNotes(feeds, value) {
    return feeds.filter(feed => {
        return feed.info.title.includes(value)
    })

}

function _saveToStorage(feeds) {
    storageService.saveToStorage(KEY, feeds)
}
function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}


function makeId(length = 5) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
