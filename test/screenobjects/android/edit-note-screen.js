class EditNoteScreen{
    get moreBtn(){
        return $('~More');
    }

    get deleteTxt(){
        return $('//*[@text="Delete"]');
    }

    get archiveTxt(){
        return $('//*[@text="Archive"]');
    }
}

module.exports = new EditNoteScreen();