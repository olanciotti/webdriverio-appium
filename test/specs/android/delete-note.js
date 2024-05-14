const AddNoteScreen = require("../../screenobjects/android/add-note-screen");
const TutorialScreen = require("../../screenobjects/android/tutorial-screen");
const ListNotesScreen = require("../../screenobjects/android/list-notes-screen");
const DeleteNoteScreen = require("../../screenobjects/android/delete-note-screen");
const NavBarComponent = require("../../screenobjects/android/nav-bar-component");
const TrashCanScreen = require("../../screenobjects/android/trash-can-screen");
const EditNoteScreen = require("../../screenobjects/android/edit-note-screen");

describe('User should be able to delete an existing Note ', () => {

    const noteTitle = 'TV Shows';
    const noteContent = 'Friends';

    it('User Deletes an existing Note', async () => {
        await TutorialScreen.skipTutorial();
        await AddNoteScreen.addAndSaveNote(noteTitle, noteContent);

        await driver.back();
        await expect(ListNotesScreen.sortBtn).toHaveText('Sort by modified time ▼');
        await expect(ListNotesScreen.noteTitle).toHaveText(noteTitle);

        await expect(ListNotesScreen.specificNoteContent(noteTitle)).toBeDisplayed();
        await ListNotesScreen.specificNoteContent(noteTitle).click();

        await expect(AddNoteScreen.editTitleArea).toHaveText(noteTitle);
        await expect(AddNoteScreen.viewContentArea).toHaveText(noteContent);

        await EditNoteScreen.moreBtn.click();
        (await EditNoteScreen.deleteTxt).click();

        await expect(DeleteNoteScreen.alertTitle).toHaveText('Delete');
        await expect(DeleteNoteScreen.alertContentTxt).toBeDisplayed();
        await driver.acceptAlert();

        await expect(ListNotesScreen.specificNoteContent(noteTitle)).not.toExist();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

        await NavBarComponent.iconNavBtn.click();
        await NavBarComponent.trashCanTxt.click();

        await expect(TrashCanScreen.title).toHaveText('Trash Can');
        await expect(ListNotesScreen.noteTitle).toHaveText(noteTitle);
        await expect(ListNotesScreen.specificNoteContent(noteTitle)).toBeDisplayed();
    })
})