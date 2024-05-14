const AddNoteScreen = require("../../screenobjects/android/add-note-screen");
const TutorialScreen = require("../../screenobjects/android/tutorial-screen");
const ListNotesScreen = require("../../screenobjects/android/list-notes-screen");
const NavBarComponent = require("../../screenobjects/android/nav-bar-component");
const EditNoteScreen = require("../../screenobjects/android/edit-note-screen");
const ArchiveNoteScreen = require("../../screenobjects/android/archive-note-screen");
const ArchiveScreen = require("../../screenobjects/android/archive-screen");

describe('User should be able to archive an existing Note ', () => {

    const noteTitle = 'TV Shows';
    const noteContent = 'Friends';

    it('User Archives an existing Note', async () => {
        await TutorialScreen.skipTutorial();
        await AddNoteScreen.addAndSaveNote(noteTitle, noteContent);

        await driver.back();
        await expect(ListNotesScreen.sortBtn).toHaveText('Sort by modified time ▼');
        await ListNotesScreen.specificNoteContent(noteTitle).click();

        await expect(AddNoteScreen.editTitleArea).toHaveText(noteTitle);
        await expect(AddNoteScreen.viewContentArea).toHaveText(noteContent);

        await EditNoteScreen.moreBtn.click();
        (await EditNoteScreen.archiveTxt).click();

        await expect(ArchiveNoteScreen.alertTitle).toHaveText('Archive');
        await expect(ArchiveNoteScreen.alertContentTxt).toBeDisplayed();
        await driver.acceptAlert();

        await expect(ListNotesScreen.specificNoteContent(noteTitle)).not.toExist();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();

        await NavBarComponent.iconNavBtn.click();
        await NavBarComponent.archiveTxt.click();

        await expect(ArchiveScreen.title).toHaveText('Archive');
        await expect(ListNotesScreen.noteTitle).toHaveText(noteTitle);
        await expect(ListNotesScreen.specificNoteContent(noteTitle)).toBeDisplayed();
    })
})