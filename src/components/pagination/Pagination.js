import React from 'react'
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 7rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    gap: 3rem;

    > select {
        border: 0;
        outline: none;
        font-size: 1.5rem;

        &:focus {
            outline: 1px solid #ddd;
            border: 1px solid #ddd;
        }
    }
        
    > div {
        > button {
            font-size: 2rem;
            color: red;
            cursor: pointer;
            border: 1px solid var(--focus-color);

            &:disabled {
                cursor: not-allowed;
                opacity: .3;
            }
        }
    }

`;

export const Pagination = ({limit, setLimit, page, setPage}) => {
    const prev = () => {
        if(page === 0) {
            return
        }
        setPage(prev => prev - 1);
    }
    const next = () => {
        setPage(prev => prev + 1);
    }
    return (
        <PaginationContainer>
            <select value={limit} onChange={e => setLimit(e.target.value)}>
                <option>10</option>
                <option>20</option>
                <option>30</option>

            </select>
        <div>
          <button disabled={page === 0} tabIndex={0} onClick={prev}>&#x2190;</button>&nbsp;
          <button onClick={next} tabIndex={0}>&#x2192;</button>

        </div>
      </PaginationContainer>
    )
}