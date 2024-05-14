class ListNotesScreen{
    get sortBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text_button_center"]');   
    }

    get noteTitle(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/title")');
    }

    specificNoteContent(title){
        return $(`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title" and @text="${title}"]`);
    }
}

module.exports = new ListNotesScreen();