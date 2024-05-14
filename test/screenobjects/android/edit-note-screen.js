class EditNoteScreen{
    get moreBtn(){
        return $('~More');
    }

    get deleteTxt(){
        return $('//*[@text="Delete"]');
    }
}

module.exports = new EditNoteScreen();