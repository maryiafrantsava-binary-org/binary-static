import React               from 'react';
import ReactDOM            from 'react-dom';
import classNames          from 'classnames';
import { Icon }            from 'Assets/Common/icon.jsx';
import { IconInfoBlue }    from 'Assets/Common/icon-info-blue.jsx';
import { IconQuestion }    from 'Assets/Common/icon-question.jsx';
import { IconRedDot }      from 'Assets/Common/icon-red-dot.jsx';

class TooltipBubble extends React.PureComponent {
    getBubblePositionStyle = (alignment, tooltip_trigger_rect) => {
        switch (alignment) {
            case 'top': return {
                left  : tooltip_trigger_rect.x,
                bottom: `calc(100% - ${tooltip_trigger_rect.top}px)`,
            };
            case 'right': return {
                left: tooltip_trigger_rect.x + tooltip_trigger_rect.width,
                top : tooltip_trigger_rect.y,
            };
            case 'bottom': return {
                left: tooltip_trigger_rect.x,
                top : tooltip_trigger_rect.y + tooltip_trigger_rect.height,
            };
            case 'left': return {
                right: `calc(100% - ${tooltip_trigger_rect.left}px)`,
                top  : tooltip_trigger_rect.y,
            };
            default: return {
                left: tooltip_trigger_rect.x,
                top : tooltip_trigger_rect.y,
            };
        }
    }

    render() {
        const {
            alignment,
            icon,
            message,
            tooltip_trigger_rect,
        } = this.props;
    
        return ReactDOM.createPortal(
            <span
                style={this.getBubblePositionStyle(
                    alignment,
                    tooltip_trigger_rect,
                )}
                className={classNames(
                    'tooltip-2__bubble',
                    `tooltip-2__bubble--${alignment}`,
                )}
            >
                <span className={classNames(
                    'tooltip-2__bubble__arrow',
                    `tooltip-2__bubble__arrow--${alignment}`,
                )}
                />
                { icon &&
                    <span className='tooltip-2__bubble__icon'>
                        {icon === 'info'     && <Icon icon={IconInfoBlue} />}
                        {icon === 'question' && <Icon icon={IconQuestion} />}
                        {icon === 'dot'      && <Icon icon={IconRedDot} />}
                    </span>
                }
                { message }
            </span>,
            document.getElementById('binary_app')
        );
    }
}

export default TooltipBubble;
