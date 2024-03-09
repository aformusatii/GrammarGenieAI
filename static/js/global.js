const isSet = function(value) {
    return (typeof value !== 'undefined') && (value !== null);
}

const isNotSet = function(value) {
    return (typeof value === 'undefined') || (value === null);
}

const copyToClipboard = function(text) {
    const tempTextarea = $('<textarea>');
    $('body').append(tempTextarea);

    tempTextarea.val(text).select();
    document.execCommand('copy');
    tempTextarea.remove();

    showInfo('Copied to clipboard');
}