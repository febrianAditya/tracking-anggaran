

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}) {

    function generatePages(currentPage, totalPages) {
        const pages = [];

        if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
        }
        }

        return pages;
    }

    return(
        <>
            <nav
                aria-label="Page navigation"
                className="d-flex justify-content-end align-items-center px-3 pb-2 mt-5"
                >
                    <ul className="pagination pagination-sm mb-0">
                        {/* First */}
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(1)}>
                            <i className="icon-base ti tabler-chevrons-left icon-xs"></i>
                        </button>
                        </li>

                        {/* Prev */}
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage - 1)}
                        >
                            <i className="icon-base ti tabler-chevron-left icon-xs"></i>
                        </button>
                        </li>

                        {/* Dynamic pages */}
                        {generatePages(currentPage, totalPages).map((page, index) => (
                        <li
                            key={index}
                            className={`page-item ${
                            page === currentPage ? "active" : ""
                            } ${page === "..." ? "disabled" : ""}`}
                        >
                            <button
                            className="page-link"
                            onClick={() => page !== "..." && onPageChange(page)}
                            >
                            {page}
                            </button>
                        </li>
                        ))}

                        {/* Next */}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage + 1)}
                        >
                            <i className="icon-base ti tabler-chevron-right icon-xs"></i>
                        </button>
                        </li>

                        {/* Last */}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(totalPages)}>
                            <i className="icon-base ti tabler-chevrons-right icon-xs"></i>
                        </button>
                        </li>
                    </ul>
            </nav>
        </>
    )
}