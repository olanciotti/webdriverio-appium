const AddNoteScreen = require('../../screenobjects/android/add-note-screen');

class TutorialScreen{
    get skipBtn(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")');
    }

    get startBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start"]');
    }

    async skipTutorial(){
        await this.skipBtn.click();
        
        await expect(AddNoteScreen.sectionLogo).toBeDisplayed();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }
}

module.exports = new TutorialScreen();