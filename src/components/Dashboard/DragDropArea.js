import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import Charts from './Charts'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    card: {
        borderRadius: 5,
        margin: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0px 1px 1px 1.5px rgba(0, 0, 0, .2)',
        display: 'block',
    },
    header: {
        fontFamily: 'Roboto, sans-serif',
        padding: '20px 30px', 
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default function DragDropArea(){
    const classes = useStyles();
    const state =  {
        cards: {
               'card-1': {
                   id: 'card-1',
                   title: 'Dauasas trendigita casauito',
                    type: 'doughnut'
                },
               'card-2': {
                   id: 'card-2',
                   title: 'Dauasas trendigita casauito',
                   type: 'doughnut'
                },
               'card-3': {
                   id: 'card-3',
                   title: 'Dauasas trendigita casauito',
                   type: 'bar'
                },
               'card-4': {
                   id: 'card-4',
                   title: 'Dauasas trendigita casauito',
                   type: 'bar'
                },
           },
           columns: {
               'column-1': {
                   id: 'column-1',
                   cardIds: ['card-1', 'card-2', 'card-3']
               },
               'column-2': {
                   id: 'column-2',
                   cardIds: ['card-4']
               }
           },
           columnOrder: ['column-1', 'column-2']
       }

    const onDragEnd = result => {
        
        const { destination, source, draggableId } = result
      
        //se o card não for levado a nenhum lugar dropável, ele não retorna nada
        if(!destination){
            return;
        }
        //se o destino for o mesmo que o card arrastado, ele não retorna nada
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index){
                return;
        }
        //coluna da posicao original do card
        const start = state.columns[source.droppableId]
        //coluna da posicao nova do card
        const finish = state.columns[destination.droppableId]

        //se forem da mesma coluna, apenas troca os indices
        if(start===finish){
            const column = state.columns[source.droppableId];
            const newCardIds = Array.from(column.cardIds)
            newCardIds.splice(source.index, 1);
            newCardIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...column,
                cardIds: newCardIds
            }

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                }
            }
            
            this.setState(newState)
            return
        }
        
        //se forem de colunas diferentes
        const startCardIds = Array.from(start.cardIds)
        startCardIds.splice(source.index, 1)
        const newStart = {
            ...start,
            cardIds: startCardIds
        }
        const finishCardIds = Array.from(finish.cardIds)
        finishCardIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            cardIds: finishCardIds,
        }

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                //é preciso atualizar ambas colunas 
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        }
        this.setState(newState)
       
    }

    return(
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{overflow: 'hidden'}}>
                    <Grid container>
                        {
                    state.columnOrder.map((columnId)=> {
                        const column = state.columns[columnId]
                        const cards = column.cardIds.map( cardId => state.cards[cardId])
                        //cada coluna é um droppable, onde os cards draggable podem ser reordenados quando soltos
                        return  <Droppable droppableId={column.id} key={column.id} cards={cards}>
                                    {provided=>(
                                        <Grid  item xs={12} 
                                        //A primeira coluna é maior que a segunda
                                        md={column.id==='column-1'? 7:5} 
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}                                       
                                        >
                                            {cards.map((card, index)=>{
                                                //cada card é um draggable, que pode ser movimentado pela tela
                                                return <Draggable  key={card.id} card={card} draggableId={card.id} index={index}>
                                                    {provided=>(
                                                         <div className={classes.card}
                                                        {...provided.draggableProps}
                                                    
                                                        ref={provided.innerRef}
                                                        >
                                                            {/*o card só pode ser movimentado quando se arrasta a header, para não atrapalhar outros elementos interativos dentro dele*/}
                                                            <header className={classes.header} {...provided.dragHandleProps}>{card.title}</header>
                                                            {/* cada card tem um grafico diferente para ser passado pelo props */}
                                                            <Charts type={card.type}/>
                                                        </div>
                                                    )}
                                                </Draggable>
                                                }
                                            )}
                                            
                                            {provided.placeholder}
                                        </Grid>
                                    )} 
                                </Droppable>
                        
                    })}
                    </Grid>
                </div>
            </DragDropContext>
        )
}