const _createNotepad = function(options) {
    const wrap = document.createElement('div');
    wrap.insertAdjacentHTML('afterbegin',`
        <div class="note_wrap">
            <div class="note_main-menu">
                <div class="note_main-menu-title">${options.title}</div>
                <div class="note_main-menu-close">&times;</div>
            </div>

            <div class="note_fun">
                <ul class="note_fun-menu">
                    <li class="note_fun-block">
                        <div>New</div>
                        <div>Save</div>
                    </li>
                    <li class="note_fun-block">
                        <div>Export XML</div>
                        <div>Export JSON</div>
                        <div>Export CSV</div>
                    </li>
                </ul>
            </div>
            <div class="note_style">
                <ul class="note_style-menu">
                    <li class="note_style-block">24</li>
                    <li class="note_style-block">left</li>
                    <li class="note_style-block">red</li>
                </ul>
            </div>
            <div class="note_area">
                <textarea name="" id="area_box" cols="30" rows="10"></textarea>
            </div>
        </div>
    `);

    document.body.appendChild(wrap);

    return wrap;
}

Notepad.create = function(options) {
    const note = _createNotepad(options);

    return note;
}

Notepad.create({
    title: 'hello notepad'
});