import React from 'react'
import { Link } from 'react-router-dom'

import { PaginationItem, Pagination } from '@mui/material'
function PaginationCustom({ number, page, link, handlePageChange }) {
    return (
        <Pagination
            showFirstButton
            showLastButton
            count={number}
            page={page}
            size="large"
            onChange={handlePageChange}
            renderItem={(item) => (
                <>
                    <PaginationItem component={Link} to={`/${link}/${item.page}`} {...item} />
                </>
            )}
        />
    )
}

export default PaginationCustom
