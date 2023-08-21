export enum ImageCanvasTool {
    Add = 'add',
    Undo = 'undo',
    Erase = 'erase',
    Clear = 'clear',
    Segment = 'segment',
    Pan = 'pan',
}

export enum ImageCanvasAction {
    SET_HISTORY = 'SET_HISTORY',
    SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL',
    SET_CURSOR_TYPE = 'SET_CURSOR_TYPE',
    SET_POINTS = 'SET_POINTS',
    SET_POINT_TYPE = 'SET_POINT_TYPE',
    SET_ZOOM_LEVEL = 'SET_ZOOM_LEVEL',
    SET_IS_PANNING = 'SET_IS_PANNING',
    SET_MASK_OPACITY = 'SET_MASK_OPACITY',
}

export enum DeviceType {
    Mobile = 0,
    Tablet = 1,
    Monitor = 2,
}
