class AddNoteScreen{
    get sectionLogo(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/logo_image"]');
    }

    get addNoteTxt(){
        return $('//*[@text="Add note"]');
    }

    get addNoteBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get dialogTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/alertTitle"]');
    }

    get addTextBtn(){
        return $('android=new UiSelector().className("android.widget.LinearLayout").instance(3)');
    }

    get dateTimeArea(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]');
    }

    get editTitleArea(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get editContentArea(){
        return $('android=new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/edit_note")');
    }

    get editPencilBtn(){
       return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewContentArea(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote(){
        await driver.back();
        await driver.back();
    }

    async addAndSaveNote(noteTitle, noteContent){
        await this.addNoteBtn.click();
        await expect(this.dialogTitle).toHaveText('Add');
        await this.addTextBtn.click();

        await expect(this.dateTimeArea).toHaveText('Editing');
        await this.editTitleArea.addValue(noteTitle);
        await this.editContentArea.addValue(noteContent);

        await this.saveNote();

        await expect(this.editTitleArea).toHaveText(noteTitle);
        await expect(this.viewContentArea).toHaveText(noteContent);
    }
}

module.exports = new AddNoteScreen();