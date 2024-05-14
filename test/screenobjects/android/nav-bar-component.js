class NavBarComponent{
    get iconNavBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanTxt(){
        return $('//*[@text="Trash Can"]');
    }

    get archiveTxt(){
        return $('//*[@text="Archive"]');
    }

}

module.exports = new NavBarComponent();