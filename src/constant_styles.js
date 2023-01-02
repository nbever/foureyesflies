export const combine = (...styles) => {

    return styles.reduce((style, item) => {
        return {
            ...style,
            ...item
        };
    }, {});
};

export const FULL_SCREEN = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: '0',
    left: '0',
    bottom: '0',
    top: '0'
};

export const RELATIVE = {
    position: 'relative'
};

export const ABSOLUTE = {
    position: 'absolute'
};

export const FULL_HEIGHT = {
    height: '100%'
};

export const FULL_WIDTH = {
    width: '100%'
};

export const valueSetter = (key, value) => {
    return {
        [key]: value
    };
};

export const FLEX = {
    display: 'flex'
};

export const ROW_STYLE = {
    display: 'flex',
    flexDirection: 'row'
};

export const SPACE_AROUND = {
    justifyContent: 'space-around'
}

export const SPACE_BETWEEN = {
    justifyContent: 'space-between'
}

export const COLUMN_STYLE = {
    display: 'flex',
    flexDirection: 'column'
};

export const GROW = {
    flexGrow: 1
};

export const RIGID = {
    flexGrow: 0
};

export const VERTICAL_CENTER = {
    alignItems: 'center'
};

export const HORIZONTAL_CENTER = {
    margin: '0',
    textAlign: 'center',
    justifyContent: 'center'
};

export const PADDING_12 = {
    padding: '12px'
};

export const padding = (amount) => {
    return {
        padding: `${amount}px`
    };
};

export const paddingTop = (amount) => {
    return {paddingTop: `${amount}px`};
};
