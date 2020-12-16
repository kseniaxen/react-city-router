import { useRef, useState } from 'react'
export default function Form() {
    const loginRef = useRef(null)
    const [login, setLogin] = useState('')
    const [loginValid, setLoginValid] = useState(true)

    const emailRef = useRef(null)
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(true)

    const imgRef = useRef(null)
    const [imgValid, setImgValid] = useState(true)

    const textAreaRef = useRef(null)
    const [textArea, setTextArea] = useState('')
    const [textAreaValid, setTextAreaValid] = useState(true)

    const hashtagRef = useRef(null)
    const [hashtag, setHashtag] = useState('')
    const [hashtagValid, setHashtagValid] = useState(true)
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log('handleFormSubmit')
        console.log(loginRef.current.value)
        if (checkEmailValidSubmit(email)) {
            console.log(emailRef.current.value)
        }
        console.log(imgRef.current.value);
        console.log(textAreaRef.current.value);
        console.log(hashtagRef.current.value);
    }
    const handleLoginChaned = e => {
        e.preventDefault();
        const newValue = e.target.value
        console.log(login, newValue)
        if (newValue.match(/^[A-Z-a-z0-9]{0,10}$/) || !newValue) {
            setLogin(newValue)
            setLoginValid(true)
        } else {
            setLoginValid(false)
        }
    }
    const handleEmailChaned = e => {
        e.preventDefault();
        const newValue = e.target.value
        setEmail(newValue)
        if (newValue.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) || !newValue) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }
    let checkEmailValidSubmit = function (value) {
        return (value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) || !value)
    }

    const onChangeFile = e => {
        const imageFile = e.target.files[0];
        if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/) || !imageFile) {
            setImgValid(false);
        } else {
            setImgValid(true);
        }
    }

    const handleTextAreaChaned = e => {
        e.preventDefault();
        const newValue = e.target.value
        console.log(textArea, newValue)
        if (newValue.length <= 120 || !newValue) {
            setTextArea(newValue)
            setTextAreaValid(true)
        } else {
            setTextAreaValid(false)
        }
    }

    const handleHashtagChaned = e => {
        e.preventDefault();
        const newValue = e.target.value
        console.log(hashtag, newValue)
        if (newValue.match(/(^|\B)#(?![0-9_]+\b)([a-z-A-Z0-9_]{1,30})(\b|\r)/) || !newValue) {
            setHashtag(newValue)
            setHashtagValid(true)
        } else {
            setHashtagValid(false)
        }
    }
    return (
        <div style={{ 'max-width': '1000' + 'px', 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto' }}>
            <h2>Form</h2>
            <form onSubmit={handleFormSubmit} class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input ref={loginRef} style={{ 'display': 'block' }} name="login" type="text" value={login} onChange={handleLoginChaned} required></input>
                        <label for="last_name">Login</label>
                        <span class="helper-text" data-error="wrong" data-success="right" htmlFor="login" style={{ 'color': 'red', 'display': loginValid ? 'none' : 'block' }}>Только английские буквы и цифры. Максимум 10 символов.</span>
                    </div>
                    <div class="input-field col s6">
                        <input name="password" type="password" required></input>
                        <label for="last_name">Password</label>
                    </div>
                    <div class="input-field col s12">
                        <input ref={emailRef} style={{ 'display': 'block' }} name="email" type="text" value={email} onChange={handleEmailChaned} required></input>
                        <label for="last_name">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right" htmlFor="email" style={{ 'color': 'red', 'display': emailValid ? 'none' : 'block' }}>Введите email</span>
                    </div>
                    <div class="file-field input-field col s12">
                        <div class="btn">
                            <span>File</span>
                            <input ref={imgRef} type="file" name="file" onChange={onChangeFile} required></input>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text"></input>
                        </div>
                        <span class="helper-text" data-error="wrong" data-success="right" htmlFor="file" style={{ 'color': 'red', 'display': imgValid ? 'none' : 'block' }}>Ожидается .jpg .jpeg .png .gif</span>
                    </div>
                    <div class="input-field col s12">
                        <textarea ref={textAreaRef} id="textarea" name="textarea" class="materialize-textarea" value={textArea} onChange={handleTextAreaChaned}></textarea>
                        <label for="textarea">Description</label>
                        <span class="helper-text" data-error="wrong" data-success="right" htmlFor="textarea" style={{ 'color': 'red', 'display': textAreaValid ? 'none' : 'block' }}>Максимум 120 символов</span>
                    </div>
                    <div class="input-field col s6">
                        <input ref={hashtagRef} id="input_text" type="text" name="hashtag" onChange={handleHashtagChaned} />
                        <label for="input_text">Hashtag</label>
                        <span class="helper-text" data-error="wrong" data-success="right" htmlFor="hashtag" style={{ 'color': 'red', 'display': hashtagValid ? 'none' : 'block' }}>Введите хэштег. Например, #Mariupol. Максимум 30 символов</span>
                    </div>
                </div>
                <button class="btn waves-effect waves-light" type="submit" value="submit">Submit
                        <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    );
}