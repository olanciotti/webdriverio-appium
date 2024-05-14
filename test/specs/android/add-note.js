const AddNoteScreen = require("../../screenobjects/android/add-note-screen");
const TutorialScreen = require("../../screenobjects/android/tutorial-screen");

describe('User should be able to add a new Note ', () => {
    
    it('User skips tutorial', async () => {
        await TutorialScreen.skipBtn.click();
        
        await expect(AddNoteScreen.sectionLogo).toBeDisplayed();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    })

    it('User Adds a new Note', async () => {

        await AddNoteScreen.addNoteBtn.click();
        await expect(AddNoteScreen.dialogTitle).toHaveText('Add');
        await AddNoteScreen.addTextBtn.click();

        await expect(AddNoteScreen.dateTimeArea).toHaveText('Editing');
        await AddNoteScreen.editTitleArea.addValue('Title');
        await AddNoteScreen.editContentArea.addValue('Hola');

        await AddNoteScreen.saveNote();
        
        await expect(AddNoteScreen.editPencilBtn).toBeDisplayed();
        await expect(AddNoteScreen.editTitleArea).toHaveText('Title');
        await expect(AddNoteScreen.viewContentArea).toHaveText('Hola');
    })
})