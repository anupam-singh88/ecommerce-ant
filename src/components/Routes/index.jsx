import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Category from '../../pages/Category'
function AppRoutes() {
    return <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/:categoryId" element={<Category />} />
    </Routes>
}
export default AppRoutes;