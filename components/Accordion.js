import { useState } from "react";

const Accordion = ({ index, data }) => {
    let ready = true;
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    let padding = 16;

    const toggleItem = function (itemIndex) {
        if (itemIndex !== activeItemIndex) {
            setActiveItemIndex(itemIndex);
        }
        else {
            setActiveItemIndex(null);
        }
    }

    const keyDown = function(e, itemIndex){
        if(e.keyCode === 13 || e.keyCode === 32){
            toggleItem(itemIndex)
        }
    }


    return (
        <div className={`accordion ${ready ? 'ready' : ''}`}>
            {data.map((item, itemIndex) => (
                    <div
                        key={itemIndex}
                        onKeyDown={(e) => keyDown(e, itemIndex)}
                        className={`accordion__item ${activeItemIndex === itemIndex ? 'active' : 'inactive'}`}
                        id={`accordion-${index}-${itemIndex}`}
                        tabIndex={0}
                        aria-controls={`accordion-content-${index}-${itemIndex}`}
                        aria-expanded={`${activeItemIndex === itemIndex ? 'true' : 'false'}`}
                    >

                        <h3 className="accordion__heading" onClick={() => toggleItem(itemIndex)}>{item.heading}</h3>
                        <div
                        className="accordion__content"
                        id={`accordion-content-${index}-${itemIndex}`}
                        aria-labelledby={`accordion-${index}-${itemIndex}`}
                        role={'region'}
                        style={{
                            height: activeItemIndex === itemIndex ? 'auto' : '0px',
                            padding: activeItemIndex === itemIndex ? `${padding}px` : '0px'
                        }}
                        dangerouslySetInnerHTML={{__html: item.content}} />
                    </div>
                )
            )}

        </div>
    );
}

export default Accordion;