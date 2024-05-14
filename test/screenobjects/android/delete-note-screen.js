class DeleteNoteScreen{
    get alertTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/alertTitle"]');
    }

    get alertContentTxt(){
        return $('//*[@text="Are you sure you want to move the note to the trash can?"]');
    }
}

module.exports = new DeleteNoteScreen();