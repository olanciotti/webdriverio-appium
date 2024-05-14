class ArchiveScreen{
    get title(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/main_title")');
    }
}

module.exports = new  ArchiveScreen();