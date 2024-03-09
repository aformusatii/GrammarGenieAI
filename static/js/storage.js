let lastSaveTimer = null;

const launchSaveData = function(data) {
    if (isSet(lastSaveTimer)) {
        clearTimeout(lastSaveTimer);
    }

    lastSaveTimer = setTimeout(saveDataNow, 2000, data);
}

const saveDataNow = function(data) {
    console.log('saveAll', data);

    const dataStr = JSON.stringify(data);
    localStorage.setItem('conversations', dataStr);

    showInfo('Local auto save executed.')
}

const getData = function() {
    const dataStr = localStorage.getItem('conversations');

    if (isSet(dataStr)) {
        return JSON.parse(dataStr);
    }

    return null;
}