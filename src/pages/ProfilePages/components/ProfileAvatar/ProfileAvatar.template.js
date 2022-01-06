import {imageIcon} from '/static/icons/imageIcon';

export const ProfileAvatarTemplate = `
    <div class="avatar">
        ${imageIcon}
        <div class="avatarOverlay">
            <div class="avatarOverlayText">
                {{overlayText}}
            </div>
        </div>
    </div>
`