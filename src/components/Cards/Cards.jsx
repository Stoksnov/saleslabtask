import './index.sass';

const Cards = () => {
    const cardsItems = [
        { id: 1, color: 'purple', title: 'Total Leads and Deals', quantity: 1600, cost: '132 000 999', alias: 'total-leads' },
        { id: 2, color: 'red', title: 'Won', quantity: 45, cost: '', alias: 'total-tasks' },
        { id: 3, color: 'green', title: 'Lost', quantity: 15, cost: '108 000', alias: 'won' },
        { id: 4, color: 'blue', title: 'New leads', quantity: 115, cost: '', alias: 'completed' },
        { id: 5, color: 'purple', title: 'Total tasks', quantity: 269, cost: '24 000', alias: 'lost' },
        { id: 6, color: 'red', title: 'Completed tasks', quantity: 115, cost: '', alias: 'expired' },
        { id: 7, color: 'green', title: 'Expired tasks', quantity: 45, cost: '', alias: 'new-leads' },
        { id: 8, color: 'blue', title: 'No tasks', quantity: 10, cost: '', alias: 'no-tasks' },
    ]
    
    return (
        <div className="Cards">
            {cardsItems.map(item =>
                <div className={`Cards__item Cards__item_${item.color}`} key={item.id}>
                    <div className="Cards__item-icon-wrap">
                        <img className="Cards__item-icon" src={`./icons/${item.alias}.svg`} alt="" />
                    </div>
                    <div className="Cards__item-info">
                        <div className="Cards__item-title text_bold">{item.title}</div>
                        <div className="Cards__item-desc">
                            <span className="text_bold">{item.quantity}</span>
                            {item.cost ?
                                <><span className="text_bold"> | </span> {item.cost} €</>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cards;