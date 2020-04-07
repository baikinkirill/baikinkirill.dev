import {Editor, EditorState, RichUtils,convertFromRaw,convertToRaw,
    CompositeDecorator,} from "draft-js";
import React from "react"
import ReactDOM from "react-dom"
import {stateToHTML} from 'draft-js-export-html';
import Header1 from "../../components/Header"


const Link = (props) => {
    const {url} = props.contentState.getEntity(props.entityKey).getData();
    return (
        <a href={url} style={styles.link}>
            {props.children}
        </a>
    );
};
const decorator = new CompositeDecorator([
    {
        strategy: findLinkEntities,
        component: Link,
    },
]);
const styles = {
    root: {

    },
    link: {
        color: '#3b5998',
        textDecoration: 'underline',
    },
};
function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                contentState.getEntity(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
}

export default class RichEditorExample extends React.Component {


    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty(decorator),width:0,height:0,title:""};

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => {
            this.setState({editorState})
            const contentState = this.state.editorState.getCurrentContent();
            const rawContent = JSON.stringify(convertToRaw(contentState));
            localStorage.setItem("unsaveeditor",rawContent)

        };

        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
    }

    componentDidMount() {
        var offsettools=document.getElementById("tools").offsetTop
        if(localStorage.getItem("unsaveeditor")!=null){
            const rawContent = localStorage.getItem("unsaveeditor")

            try{
                const contentState = convertFromRaw(JSON.parse(rawContent));
                const editorState = EditorState.createWithContent(contentState,decorator);
                this.setState({editorState:editorState,title:localStorage.getItem("unsavetitle")})
            }catch (e) {
                localStorage.setItem("unsaveeditor",null)
            }
        }


        let height = window.outerHeight
        let width=window.innerWidth
        this.setState({height:height,width:width})
        window.addEventListener(`resize`, (event) => {


            let height = window.innerHeight
            let width=window.innerWidth
            this.setState({height:height,width:width})
            this.forceUpdate()
        });
        window.onscroll=(e)=>{
            if(window.scrollY>offsettools){
                document.getElementById("rtools").style.height=document.getElementById("tools").offsetHeight+"px"
                document.getElementById("tools").style.position="fixed"
                document.getElementById("tools").style.backgroundColor="white"
                document.getElementById("hr").style.display="block"
            }else{
                document.getElementById("tools").style.position="relative"
                document.getElementById("rtools").style.height=0
                document.getElementById("tools").style.backgroundColor="transparent"
                document.getElementById("hr").style.display="none"
            }
        }
    }
    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }
    _onLinkInputKeyDown(e) {
        if (e.which === 13) {
            setTimeout(() => this.focus(), 0);
        }
    }
    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }
    rend(){
        let options = {
            defaultBlockTag: 'div',

            blockRenderers: {
                atomic: (block) => {
                    let data = block.getData();
                    if (data.get('foo') === 'bar') {
                        return '<div>' + escape(block.getText()) + '</div>';
                    }
                },
            },
        };
        var rnd=stateToHTML(this.state.editorState.getCurrentContent(),options)
        document.getElementById("ffff").innerHTML=rnd

    }
    _confirmLink(e) {
        const urlValue = prompt('Введите ссылку', '');
        // получаем текущий editorState
        const { editorState } = this.state;
        // получаем текущий contentState
        const contentState = editorState.getCurrentContent();
        // создаем Entity
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'SEGMENTED',
            { url: urlValue,target:"_blank" }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        // обновляем свойство currentContent у editorState
        const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity});

        // с помощью метода toggleLink из RichUtils генерируем новый
        // editorState и обновляем стейт
        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                newEditorState.getSelection(),
                entityKey
            )
        }, () => {
            setTimeout(() => this.focus(), 0);
        });
    }

    render() {
        const {editorState} = this.state;
        var OTHER = [
            {label: 'Link', style: 'A',onClick:this._confirmLink.bind(this)},
        ];
        var width=this.state.width
        var height=this.state.height

        var rt="RichEditor-root"
        if(width<=950){
            rt="RichEditor-root1"
        }

        var linkStyle="RichEditor-styleButton"
       try{
           const selection = editorState.getSelection();
           const startKey = editorState.getSelection().getStartKey();
           const contentState1 = editorState.getCurrentContent();
           const startOffset = editorState.getSelection().getStartOffset();
           const blockWithLinkAtBeginning = contentState1.getBlockForKey(startKey);
           const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

           if(linkKey){
               linkStyle += ' RichEditor-activeButton';
           }
       }catch (e) {

       }
        const GetButtons = (props) => {
            var currentStyle = props.editorState.getCurrentInlineStyle();

            return (
                <div className="RichEditor-controls">
                    {OTHER.map(type =>
                        <span
                            key={type.label}
                            className={linkStyle}
                            active={currentStyle.has(type.style)}
                            label={type.label}
                            onMouseDown={type.onClick}

                        >Link</span>
                    )}
                </div>
            );
        };

        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <div>
                <Header1></Header1>


                <div>
                    <div>
                        {width>950?(<div className="hdblock1">
                    <textarea  id="textarea25" onKeyDown={this.onLinkInputKeyDown} value={this.state.title} onChange={(e)=>{
                        var nw = e.target.value.replace("\n","")
                        this.setState({title:nw})
                        localStorage.setItem("unsavetitle",nw)
                        document.getElementById("textarea25").style.height="auto"

                        document.getElementById("textarea25").style.height=(Number((document.getElementById("textarea25").scrollHeight))+document.getElementById("textarea25").scrollTop)+"px"
                    }} style={{marginLeft:"auto",marginRight:"auto",height:50,width:900,fontSize:32,padding:5,resize:"none",boxSizing:"border-box"}} className="RichEditor-root" placeholder="Заголовок"></textarea>
                        </div>):(<div>
                            <div style={{display:"flex"}}><textarea id="textarea25" value={this.state.title} onChange={(e)=>{
                                var nw = e.target.value.replace("\n","")
                                this.setState({title:nw})
                                localStorage.setItem("unsavetitle",nw)
                                document.getElementById("textarea25").style.height="auto"

                                document.getElementById("textarea25").style.height=(Number((document.getElementById("textarea25").scrollHeight))+document.getElementById("textarea25").scrollTop)+"px"
                            }} onKeyDown={this.onLinkInputKeyDown} style={{flex:1,height:30,paddingLeft:5,paddingRight:5,height:40,fontSize:24,padding:5,resize:"none",boxSizing:"border-box"}} className="RichEditor-root1" placeholder="Заголовок"></textarea></div>
                        </div>)}
                        <div className={rt}>
                            <div>
                                <div id="rtools">

                                </div>
                                <div id="tools" style={{top:0,width:"100%",maxWidth:"898px"}}>


                                        <BlockStyleControls
                                            editorState={editorState}
                                            onToggle={this.toggleBlockType}
                                        />






                                    <GetButtons
                                        editorState={editorState}
                                        onToggle={this._confirmLink.bind(this)}
                                    />
                                    <InlineStyleControls
                                        editorState={editorState}
                                        onToggle={this.toggleInlineStyle}
                                    />
                                    <hr id="hr" style={{position:"fixed",maxWidth:"898px",display:"none",marginTop:"-1px"}} align="center" width="100%" size="1" color="#ddd " />
                                </div>
                            </div>

                            <div style={styles.editor} className={className} onClick={this.focus}>
                                <Editor
                                    blockStyleFn={getBlockStyle}
                                    customStyleMap={styleMap}
                                    editorState={this.state.editorState}
                                    handleKeyCommand={this.handleKeyCommand}
                                    onChange={this.onChange}
                                    onTab={this.onTab}
                                    placeholder="Tell a story..."
                                    ref="editor"
                                    spellCheck={true}

                                />
                            </div>
                            <button onClick={this.rend.bind(this)}>rend</button>
                            <div className="rnd" id="ffff"></div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        case 'link': return 'RichEditor-a';
        default: return null;
    }
}

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
        );
    }
}

const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
];



const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div onClick={()=>console.log(currentStyle)} className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};
