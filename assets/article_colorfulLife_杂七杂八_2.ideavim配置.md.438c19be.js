import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.25ff06b1.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/colorfulLife/杂七杂八/2.ideavim配置.md","filePath":"article/colorfulLife/杂七杂八/2.ideavim配置.md","lastUpdated":1707839101000}'),l={name:"article/colorfulLife/杂七杂八/2.ideavim配置.md"},p=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;==========================================</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Author:  hank.zhao</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Version: 0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Email: hxzhenu@gmai.com</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Desc: my ideavim config file</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;==========================================</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; set leader key</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;SPACE&gt; &lt;Nop&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">map &lt;Space&gt; &lt;leader&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; search</span></span>
<span class="line"><span style="color:#e1e4e8;">set hlsearch</span></span>
<span class="line"><span style="color:#e1e4e8;">set incsearch</span></span>
<span class="line"><span style="color:#e1e4e8;">set smartcase</span></span>
<span class="line"><span style="color:#e1e4e8;">set ignorecase</span></span>
<span class="line"><span style="color:#e1e4e8;">set showmode</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; set de=on</span></span>
<span class="line"><span style="color:#e1e4e8;">set scrolloff=5</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; set keep-english-in-normal-and-restore-in-insert</span></span>
<span class="line"><span style="color:#e1e4e8;">set keep-english-in-normal</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; 设置vim剪贴板和系统剪贴板一致</span></span>
<span class="line"><span style="color:#e1e4e8;">set clipboard^=unnamed,unnamedplus</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">set easymotion</span></span>
<span class="line"><span style="color:#e1e4e8;">set surround</span></span>
<span class="line"><span style="color:#e1e4e8;">set argtextobj</span></span>
<span class="line"><span style="color:#e1e4e8;">set multiple-cursors</span></span>
<span class="line"><span style="color:#e1e4e8;">set exchange</span></span>
<span class="line"><span style="color:#e1e4e8;">set highlightedyank</span></span>
<span class="line"><span style="color:#e1e4e8;">set textobj-entire</span></span>
<span class="line"><span style="color:#e1e4e8;">set NERDTree</span></span>
<span class="line"><span style="color:#e1e4e8;">set ReplaceWithRegister</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Remap multiple-cursors shortcuts for Mac</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;C-n&gt; &lt;Plug&gt;NextWholeOccurrence</span></span>
<span class="line"><span style="color:#e1e4e8;">xmap &lt;C-n&gt; &lt;Plug&gt;NextWholeOccurrence</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;C-x&gt; &lt;Plug&gt;SkipOccurrence</span></span>
<span class="line"><span style="color:#e1e4e8;">xmap &lt;C-x&gt; &lt;Plug&gt;SkipOccurrence</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;C-p&gt; &lt;Plug&gt;RemoveOccurrence</span></span>
<span class="line"><span style="color:#e1e4e8;">xmap &lt;C-p&gt; &lt;Plug&gt;RemoveOccurrence</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;S-C-n&gt; &lt;Plug&gt;AllWholeOccurrences</span></span>
<span class="line"><span style="color:#e1e4e8;">xmap &lt;S-C-n&gt; &lt;Plug&gt;AllWholeOccurrences</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; basic key mapping</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap L $</span></span>
<span class="line"><span style="color:#e1e4e8;">vnoremap H ^</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap H ^</span></span>
<span class="line"><span style="color:#e1e4e8;">vnoremap L $</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap \` ,</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap jk &lt;Esc&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; nerdtree</span></span>
<span class="line"><span style="color:#e1e4e8;">map &lt;leader&gt;e :NERDTreeToggle&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;d :NERDTreeFocus&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot; Idea specific settings ------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">set ideajoin</span></span>
<span class="line"><span style="color:#e1e4e8;">set idearefactormode=keep</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; clear the highlighted search result</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;Leader&gt;sc :nohlsearch&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; move half page faster</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;n &lt;C-d&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;u &lt;C-u&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; easymotion</span></span>
<span class="line"><span style="color:#e1e4e8;">map &lt;leader&gt;f &lt;Plug&gt;(easymotion-s)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; ================================================================================================</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; 👻👻👻 Which-Key 👻👻👻</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; https://gist.github.com/LintaoAmons/18a8e3d5d45a22280ca54f1c69f43717</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; ================================================================================================</span></span>
<span class="line"><span style="color:#e1e4e8;">set which-key</span></span>
<span class="line"><span style="color:#e1e4e8;">set notimeout</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKey_ShowVimActions = &quot;true&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; f: Find/Format ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat = &quot;&lt;leader&gt;f FindOrFormat&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat_FindFile = &quot;&lt;leader&gt;ff FindFile&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;ff &lt;action&gt;(GotoFile)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat_FindFileLocation = &quot;&lt;leader&gt;fl FindFileLocation&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;fl &lt;action&gt;(SelectInProjectView)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindString = &quot;&lt;leader&gt;fs FindString&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;fs &lt;Plug&gt;(easymotion-s)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat_FindText = &quot;&lt;leader&gt;ft FindText&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;ft &lt;action&gt;(FindInPath)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat_Commands = &quot;&lt;leader&gt;fc Commands&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;fc &lt;action&gt;(GotoAction)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat_OpenedProject = &quot;&lt;leader&gt;fp OpenedProject&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;fp &lt;action&gt;(OpenProjectWindows)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_FindOrFormat_Format = &quot;&lt;leader&gt;fm Format&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;fm &lt;action&gt;(ReformatCode) \\| &lt;action&gt;(OptimizeImports)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; i: Insert ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_InsertAfterBrackets = &quot;&lt;leader&gt;i InsertAfterBrackets&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;i f(a</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; j: add Semicolon and goto nextline⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_InsertSemicolon = &quot;&lt;leader&gt;j InsertSemicolon&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;j A;&lt;ESC&gt;o</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; l: lsp: Language server protocol (align with neovim)⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_LSP = &quot;&lt;leader&gt;l LSP&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_LSP_Rename = &quot;&lt;leader&gt;lr Rename&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;lr &lt;action&gt;(RenameElement)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; n: No ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_No_Highlight = &quot;&lt;leader&gt;nl NoHighlight&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;nl :nohlsearch&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; s: Show ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Show = &quot;&lt;leader&gt;s Show&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Show_FileStructure = &quot;&lt;leader&gt;ss ShowFileStructure&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;ss &lt;action&gt;(FileStructurePopup)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Show_Bookmarks = &quot;&lt;leader&gt;sb ShowBookmarks&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;sb &lt;action&gt;(ShowBookmarks)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; t: Terminal ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Terminal = &quot;&lt;leader&gt;t Terminal&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Terminal_ActivateTerminalToolWindow= &quot;&lt;leader&gt;tr TerminalActivateTerminalToolWindow&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;tr &lt;action&gt;(ActivateTerminalToolWindow)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; r: Run/Re ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_RunOrRe = &quot;&lt;leader&gt;r RunOrRe&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_RunOrRe_ReRun = &quot;&lt;leader&gt;rr ReRun&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;rr &lt;action&gt;(Rerun)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_RunOrRe_ReRunTests = &quot;&lt;leader&gt;rt ReRunTests&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;rt &lt;action&gt;(RerunTests)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_RunOrRe_Rename = &quot;&lt;leader&gt;rn Rename&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">map &lt;leader&gt;rn &lt;action&gt;(RenameElement)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; w: Window ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Windows = &quot;&lt;leader&gt;w Windows&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Windows_maximize = &quot;&lt;leader&gt;wo maximize&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;wo &lt;action&gt;(UnsplitAll) \\| &lt;action&gt;(HideAllWindows)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Windows_splitWindowVertically = &quot;&lt;leader&gt;wl splitWindowVertically&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;wr &lt;action&gt;(SplitVertically)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Windows_splitWindowHorizontally = &quot;&lt;leader&gt;wr splitWindowHorizontally&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;wd &lt;action&gt;(SplitHorizontally)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Windows_closeActiveWindow = &quot;&lt;leader&gt;wc closeActiveWindow&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;wc &lt;c-w&gt;c</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; z: zip(fold) ⭐️</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Zip = &quot;&lt;leader&gt;z Zip&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Zip_unZipAll = &quot;&lt;leader&gt;zo unZipAll&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;zo &lt;action&gt;(ExpandAllRegions)</span></span>
<span class="line"><span style="color:#e1e4e8;">let g:WhichKeyDesc_Zip_ZipAll = &quot;&lt;leader&gt;zc ZipAll&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">nmap &lt;leader&gt;zc &lt;action&gt;(CollapseAllRegions)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Window operation</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;ww &lt;C-W&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;wj &lt;C-W&gt;j</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;wk &lt;C-W&gt;k</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;wh &lt;C-W&gt;h</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;wl &lt;C-W&gt;l</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;w\\| &lt;C-W&gt;v</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; copy and paste</span></span>
<span class="line"><span style="color:#e1e4e8;">noremap &lt;Leader&gt;y &quot;*y</span></span>
<span class="line"><span style="color:#e1e4e8;">noremap &lt;Leader&gt;p &quot;0p</span></span>
<span class="line"><span style="color:#e1e4e8;">noremap &lt;Leader&gt;P &quot;*p</span></span>
<span class="line"><span style="color:#e1e4e8;">vnoremap Y &quot;+y</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Tab operation</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap tn gt</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap tp gT</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Insert mode shortcut</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-h&gt; &lt;Left&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-j&gt; &lt;Down&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-k&gt; &lt;Up&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-l&gt; &lt;Right&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-a&gt; &lt;Home&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-e&gt; &lt;End&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">inoremap &lt;C-d&gt; &lt;Delete&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; Quit normal mode</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;Space&gt;q  :q&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; edit vimrc</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;ve :e ~/.ideavimrc&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;vw :w!&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;vs :source ~/.ideavimrc&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; intellij built in key map</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;a :action GotoAction&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;b :action Bookmarks&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;c :action GotoClass&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;nnoremap &lt;leader&gt;e :action SearchEverywhere&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;gc :action Git.CompareWithBranch&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;ga :action Annotate&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;gh :action Vcs.ShowTabbedFileHistory&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;r :action RecentFiles&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;s :action SelectInProjectView&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;Q :action CloseAllEditors</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;toggle something</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;toggle track vim action Id</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ta :action VimFindActionIdAction&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; run and debug</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ,d :action Debug&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ,r :action Run&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ,c :action CompileDirty&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ,b :action ToggleLineBreakpoint&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ,v :action ViewBreakpoints&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap ,s :action Stop&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; navigation</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap gs :action GotoSuperMethod&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap gb :action JumpToLastChange&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap gi :action GotoImplementation&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap gd :action GotoDeclaration&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap gf :action FileStructurePopup&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot; code actions</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap U :action FindUsages&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">noremap R :action RenameElement&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap == :action ReformatCode&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap &lt;leader&gt;r :action ReformatCode&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">vnoremap = :action ReformatCode&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap -- :action OptimizeImports&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">nnoremap cc :action CommentByLineComment&lt;CR&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">vnoremap cc :action CommentByLineComment&lt;CR&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;==========================================</span></span>
<span class="line"><span style="color:#24292e;">&quot; Author:  hank.zhao</span></span>
<span class="line"><span style="color:#24292e;">&quot; Version: 0.1</span></span>
<span class="line"><span style="color:#24292e;">&quot; Email: hxzhenu@gmai.com</span></span>
<span class="line"><span style="color:#24292e;">&quot; Desc: my ideavim config file</span></span>
<span class="line"><span style="color:#24292e;">&quot;==========================================</span></span>
<span class="line"><span style="color:#24292e;">&quot; set leader key</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;SPACE&gt; &lt;Nop&gt;</span></span>
<span class="line"><span style="color:#24292e;">map &lt;Space&gt; &lt;leader&gt;</span></span>
<span class="line"><span style="color:#24292e;">&quot; search</span></span>
<span class="line"><span style="color:#24292e;">set hlsearch</span></span>
<span class="line"><span style="color:#24292e;">set incsearch</span></span>
<span class="line"><span style="color:#24292e;">set smartcase</span></span>
<span class="line"><span style="color:#24292e;">set ignorecase</span></span>
<span class="line"><span style="color:#24292e;">set showmode</span></span>
<span class="line"><span style="color:#24292e;">&quot; set de=on</span></span>
<span class="line"><span style="color:#24292e;">set scrolloff=5</span></span>
<span class="line"><span style="color:#24292e;">&quot; set keep-english-in-normal-and-restore-in-insert</span></span>
<span class="line"><span style="color:#24292e;">set keep-english-in-normal</span></span>
<span class="line"><span style="color:#24292e;">&quot; 设置vim剪贴板和系统剪贴板一致</span></span>
<span class="line"><span style="color:#24292e;">set clipboard^=unnamed,unnamedplus</span></span>
<span class="line"><span style="color:#24292e;">&quot; plugins</span></span>
<span class="line"><span style="color:#24292e;">set easymotion</span></span>
<span class="line"><span style="color:#24292e;">set surround</span></span>
<span class="line"><span style="color:#24292e;">set argtextobj</span></span>
<span class="line"><span style="color:#24292e;">set multiple-cursors</span></span>
<span class="line"><span style="color:#24292e;">set exchange</span></span>
<span class="line"><span style="color:#24292e;">set highlightedyank</span></span>
<span class="line"><span style="color:#24292e;">set textobj-entire</span></span>
<span class="line"><span style="color:#24292e;">set NERDTree</span></span>
<span class="line"><span style="color:#24292e;">set ReplaceWithRegister</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; Remap multiple-cursors shortcuts for Mac</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;C-n&gt; &lt;Plug&gt;NextWholeOccurrence</span></span>
<span class="line"><span style="color:#24292e;">xmap &lt;C-n&gt; &lt;Plug&gt;NextWholeOccurrence</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;C-x&gt; &lt;Plug&gt;SkipOccurrence</span></span>
<span class="line"><span style="color:#24292e;">xmap &lt;C-x&gt; &lt;Plug&gt;SkipOccurrence</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;C-p&gt; &lt;Plug&gt;RemoveOccurrence</span></span>
<span class="line"><span style="color:#24292e;">xmap &lt;C-p&gt; &lt;Plug&gt;RemoveOccurrence</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;S-C-n&gt; &lt;Plug&gt;AllWholeOccurrences</span></span>
<span class="line"><span style="color:#24292e;">xmap &lt;S-C-n&gt; &lt;Plug&gt;AllWholeOccurrences</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; basic key mapping</span></span>
<span class="line"><span style="color:#24292e;">nnoremap L $</span></span>
<span class="line"><span style="color:#24292e;">vnoremap H ^</span></span>
<span class="line"><span style="color:#24292e;">nnoremap H ^</span></span>
<span class="line"><span style="color:#24292e;">vnoremap L $</span></span>
<span class="line"><span style="color:#24292e;">nnoremap \` ,</span></span>
<span class="line"><span style="color:#24292e;">inoremap jk &lt;Esc&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; nerdtree</span></span>
<span class="line"><span style="color:#24292e;">map &lt;leader&gt;e :NERDTreeToggle&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;d :NERDTreeFocus&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot; Idea specific settings ------------------</span></span>
<span class="line"><span style="color:#24292e;">set ideajoin</span></span>
<span class="line"><span style="color:#24292e;">set idearefactormode=keep</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; clear the highlighted search result</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;Leader&gt;sc :nohlsearch&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; move half page faster</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;n &lt;C-d&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;u &lt;C-u&gt;</span></span>
<span class="line"><span style="color:#24292e;">&quot; easymotion</span></span>
<span class="line"><span style="color:#24292e;">map &lt;leader&gt;f &lt;Plug&gt;(easymotion-s)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; ================================================================================================</span></span>
<span class="line"><span style="color:#24292e;">&quot; 👻👻👻 Which-Key 👻👻👻</span></span>
<span class="line"><span style="color:#24292e;">&quot; https://gist.github.com/LintaoAmons/18a8e3d5d45a22280ca54f1c69f43717</span></span>
<span class="line"><span style="color:#24292e;">&quot; ================================================================================================</span></span>
<span class="line"><span style="color:#24292e;">set which-key</span></span>
<span class="line"><span style="color:#24292e;">set notimeout</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKey_ShowVimActions = &quot;true&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; f: Find/Format ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat = &quot;&lt;leader&gt;f FindOrFormat&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat_FindFile = &quot;&lt;leader&gt;ff FindFile&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;ff &lt;action&gt;(GotoFile)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat_FindFileLocation = &quot;&lt;leader&gt;fl FindFileLocation&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;fl &lt;action&gt;(SelectInProjectView)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindString = &quot;&lt;leader&gt;fs FindString&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;fs &lt;Plug&gt;(easymotion-s)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat_FindText = &quot;&lt;leader&gt;ft FindText&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;ft &lt;action&gt;(FindInPath)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat_Commands = &quot;&lt;leader&gt;fc Commands&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;fc &lt;action&gt;(GotoAction)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat_OpenedProject = &quot;&lt;leader&gt;fp OpenedProject&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;fp &lt;action&gt;(OpenProjectWindows)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_FindOrFormat_Format = &quot;&lt;leader&gt;fm Format&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;fm &lt;action&gt;(ReformatCode) \\| &lt;action&gt;(OptimizeImports)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; i: Insert ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_InsertAfterBrackets = &quot;&lt;leader&gt;i InsertAfterBrackets&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;i f(a</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; j: add Semicolon and goto nextline⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_InsertSemicolon = &quot;&lt;leader&gt;j InsertSemicolon&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;j A;&lt;ESC&gt;o</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; l: lsp: Language server protocol (align with neovim)⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_LSP = &quot;&lt;leader&gt;l LSP&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_LSP_Rename = &quot;&lt;leader&gt;lr Rename&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;lr &lt;action&gt;(RenameElement)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; n: No ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_No_Highlight = &quot;&lt;leader&gt;nl NoHighlight&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;nl :nohlsearch&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; s: Show ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Show = &quot;&lt;leader&gt;s Show&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Show_FileStructure = &quot;&lt;leader&gt;ss ShowFileStructure&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;ss &lt;action&gt;(FileStructurePopup)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Show_Bookmarks = &quot;&lt;leader&gt;sb ShowBookmarks&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;sb &lt;action&gt;(ShowBookmarks)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; t: Terminal ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Terminal = &quot;&lt;leader&gt;t Terminal&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Terminal_ActivateTerminalToolWindow= &quot;&lt;leader&gt;tr TerminalActivateTerminalToolWindow&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;tr &lt;action&gt;(ActivateTerminalToolWindow)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; r: Run/Re ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_RunOrRe = &quot;&lt;leader&gt;r RunOrRe&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_RunOrRe_ReRun = &quot;&lt;leader&gt;rr ReRun&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;rr &lt;action&gt;(Rerun)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_RunOrRe_ReRunTests = &quot;&lt;leader&gt;rt ReRunTests&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;rt &lt;action&gt;(RerunTests)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_RunOrRe_Rename = &quot;&lt;leader&gt;rn Rename&quot;</span></span>
<span class="line"><span style="color:#24292e;">map &lt;leader&gt;rn &lt;action&gt;(RenameElement)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; w: Window ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Windows = &quot;&lt;leader&gt;w Windows&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Windows_maximize = &quot;&lt;leader&gt;wo maximize&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;wo &lt;action&gt;(UnsplitAll) \\| &lt;action&gt;(HideAllWindows)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Windows_splitWindowVertically = &quot;&lt;leader&gt;wl splitWindowVertically&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;wr &lt;action&gt;(SplitVertically)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Windows_splitWindowHorizontally = &quot;&lt;leader&gt;wr splitWindowHorizontally&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;wd &lt;action&gt;(SplitHorizontally)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Windows_closeActiveWindow = &quot;&lt;leader&gt;wc closeActiveWindow&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;wc &lt;c-w&gt;c</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; z: zip(fold) ⭐️</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Zip = &quot;&lt;leader&gt;z Zip&quot;</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Zip_unZipAll = &quot;&lt;leader&gt;zo unZipAll&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;zo &lt;action&gt;(ExpandAllRegions)</span></span>
<span class="line"><span style="color:#24292e;">let g:WhichKeyDesc_Zip_ZipAll = &quot;&lt;leader&gt;zc ZipAll&quot;</span></span>
<span class="line"><span style="color:#24292e;">nmap &lt;leader&gt;zc &lt;action&gt;(CollapseAllRegions)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; Window operation</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;ww &lt;C-W&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;wj &lt;C-W&gt;j</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;wk &lt;C-W&gt;k</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;wh &lt;C-W&gt;h</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;wl &lt;C-W&gt;l</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;w\\| &lt;C-W&gt;v</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; copy and paste</span></span>
<span class="line"><span style="color:#24292e;">noremap &lt;Leader&gt;y &quot;*y</span></span>
<span class="line"><span style="color:#24292e;">noremap &lt;Leader&gt;p &quot;0p</span></span>
<span class="line"><span style="color:#24292e;">noremap &lt;Leader&gt;P &quot;*p</span></span>
<span class="line"><span style="color:#24292e;">vnoremap Y &quot;+y</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; Tab operation</span></span>
<span class="line"><span style="color:#24292e;">nnoremap tn gt</span></span>
<span class="line"><span style="color:#24292e;">nnoremap tp gT</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; Insert mode shortcut</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-h&gt; &lt;Left&gt;</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-j&gt; &lt;Down&gt;</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-k&gt; &lt;Up&gt;</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-l&gt; &lt;Right&gt;</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-a&gt; &lt;Home&gt;</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-e&gt; &lt;End&gt;</span></span>
<span class="line"><span style="color:#24292e;">inoremap &lt;C-d&gt; &lt;Delete&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; Quit normal mode</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;Space&gt;q  :q&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; edit vimrc</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;ve :e ~/.ideavimrc&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;vw :w!&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;vs :source ~/.ideavimrc&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; intellij built in key map</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;a :action GotoAction&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;b :action Bookmarks&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;c :action GotoClass&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">&quot;nnoremap &lt;leader&gt;e :action SearchEverywhere&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;gc :action Git.CompareWithBranch&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;ga :action Annotate&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;gh :action Vcs.ShowTabbedFileHistory&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;r :action RecentFiles&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;s :action SelectInProjectView&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;Q :action CloseAllEditors</span></span>
<span class="line"><span style="color:#24292e;">&quot;toggle something</span></span>
<span class="line"><span style="color:#24292e;">&quot;toggle track vim action Id</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ta :action VimFindActionIdAction&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; run and debug</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ,d :action Debug&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ,r :action Run&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ,c :action CompileDirty&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ,b :action ToggleLineBreakpoint&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ,v :action ViewBreakpoints&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap ,s :action Stop&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">&quot; navigation</span></span>
<span class="line"><span style="color:#24292e;">nnoremap gs :action GotoSuperMethod&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap gb :action JumpToLastChange&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap gi :action GotoImplementation&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap gd :action GotoDeclaration&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap gf :action FileStructurePopup&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot; code actions</span></span>
<span class="line"><span style="color:#24292e;">nnoremap U :action FindUsages&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">noremap R :action RenameElement&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap == :action ReformatCode&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap &lt;leader&gt;r :action ReformatCode&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">vnoremap = :action ReformatCode&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap -- :action OptimizeImports&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">nnoremap cc :action CommentByLineComment&lt;CR&gt;</span></span>
<span class="line"><span style="color:#24292e;">vnoremap cc :action CommentByLineComment&lt;CR&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br></div></div>`,1),t=[p];function o(c,r,i,m,u,y){return n(),a("div",null,t)}const d=s(l,[["render",o]]);export{b as __pageData,d as default};
