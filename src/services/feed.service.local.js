import { storageService } from './storage.service'

const KEY = 'feedDB'


export const feedService = {
    query,
    removeFeed,
    addFeed,
    getFeedById,
    onUpdatedFeed,
    makeId

};


_createFeeds()

function query(filterBy = null) {
    const feeds = _loadFromStorage()
    if (!filterBy) return Promise.resolve(feeds)
    const filteredFeeds = _getFilteredFeeds(feeds, filterBy)
    return Promise.resolve(filteredFeeds)

}

function _createFeeds() {
    var feeds = _loadFromStorage();
    if (!feeds || !feeds.length) {
        feeds = [
            {
                id: makeId(),
                email: 'blabla@gmail.com',
                txt: 'yofi yofi'
            },
            {
                id: makeId(),
                email: 'blabls@gmail.com',
                txt: 'yofi yoti'
            },

        ]
        _saveToStorage(feeds);
    }
    return feeds;
}


function removeFeed(id) {
    var feeds = _loadFromStorage();
    const feedIdx = feeds.findIndex((feed) => feed.id === id);
    feeds.splice(feedIdx, 1);
    _saveToStorage(feeds);
    return Promise.resolve(feeds);
}


function addFeed(userFeed) {
    var feeds = _loadFromStorage();
    feeds.unshift(userFeed);
    _saveToStorage(feeds);
    return Promise.resolve(feeds);
}

function getFeedById(feedId) {
    var feeds = _loadFromStorage();
    var feed = feeds.find(function (feed) {
        return feedId === feed.id
    })
    return Promise.resolve(feed)
}

function onUpdatedFeed(updatedFeed) {
    let feeds = _loadFromStorage()
    let feedIdx = feeds.findIndex((feed) => feed.id === updatedFeed.id)
    feeds[feedIdx] = updatedFeed
    _saveToStorage(feeds)
    return Promise.resolve(feeds)
}

function _getFilteredFeeds(feeds, value) {
    return feeds.filter(feed => {
        return feed.email.includes(value)
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
