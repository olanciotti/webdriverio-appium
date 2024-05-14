class ArchiveNoteScreen{
    get alertTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/alertTitle"]');
    }

    get alertContentTxt(){
        return $('//*[@text="Are you sure you want to archive the note?"]');
    }
}

module.exports = new ArchiveNoteScreen();