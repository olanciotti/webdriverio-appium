class NavBarComponent{
    get iconNavBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanTxt(){
        return $('//*[@text="Trash Can"]');
    }
}

module.exports = new NavBarComponent();