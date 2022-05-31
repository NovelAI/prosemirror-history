import { Transaction, PluginKey, Plugin, Command, EditorState } from 'prosemirror-state';

declare function closeHistory(tr: Transaction): Transaction;
declare const historyKey: PluginKey<any>;
declare const closeHistoryKey: PluginKey<any>;
interface HistoryOptions {
    depth?: number;
    newGroupDelay?: number;
}
declare function history(config?: HistoryOptions): Plugin;
declare const undo: Command;
declare const redo: Command;
declare function undoDepth(state: EditorState): any;
declare function redoDepth(state: EditorState): any;
declare function clear(state: any): void;

export { clear, closeHistory, closeHistoryKey, history, historyKey, redo, redoDepth, undo, undoDepth };
