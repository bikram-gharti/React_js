import { RiSearchLine, RiDashboardLine, RiMenuLine } from "@remixicon/react";
const Navbar = () => {
  return (
    <>
        <nav>
            {/* left side */}
            <div class="left">
            <h1>User</h1>
            <select name="sites" id="sites">
                <option value="">All sites</option>
                <option value="site1">Site 1</option>
                <option value="site2">Site 2</option>
                <option value="site3">Site 3</option>
            </select>
            
            <select name="AT&T" id="AT&T">
                <option value="">AT&T</option>
                <option value="att1">AT&T 1</option>
                <option value="att2">AT&T 2</option>
                <option value="att3">AT&T 3</option>
            </select>

            <input type="text" placeholder='Search' />

            <div class="search-icon">
                <RiSearchLine />
            </div>
            </div>

            {/* right side */}
            <div class="right">
            <RiDashboardLine />
            <RiMenuLine />
            </div>
        </nav>
    </>
  )
}

export default Navbar
