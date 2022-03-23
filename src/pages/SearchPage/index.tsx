import React from 'react'
import clsx from 'clsx'

import SearchContainer from '../../components/Search.Container'

import s from './styles.module.scss'

const SearchPage: React.FC = () => {
    return (
        <div className={ clsx(s.root) }>
            <div style={{ textAlign: 'center', fontSize: '1.8em' }}>GitHub Searcher</div>
            <SearchContainer />
        </div>
    )
}

export default SearchPage