/* 
1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
    Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
    Không tìm thấy nhân viên có id thì hiển thị thông báo.
3. Cập nhật mức lương của nhân viên theo id
4. Tìm kiếm nhân viên theo tên.
5. Thoát
*/
let employees= []; // tạo mảng chứa danh sách nhân viên;
while (true) {
    let choice= +prompt(
        `
            1. Thêm nhân viên mới.
            2. Xóa nhân viên theo id.
                Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
                Không tìm thấy nhân viên có id thì hiển thị thông báo.
            3. Cập nhật mức lương của nhân viên theo id
            4. Tìm kiếm nhân viên theo tên.
            5. Thoát
        `);
        switch (choice) {
            case 1:
                // Thêm nhân viên
                addEmployee();
                break;
            case 2:
                // xóa nhân viên theo id
                deleteEmployee();
                break;
            case 3:
                // cập nhật lương theo id
                updateSalary();
                break;
            case 4:
                // tìm kiếm  nhân viên theo tên 

                break;
            default:
                break;
        }
        if(choice==5){
            break;
        }
}
// tạo hàm thêm nhân viên
 function addEmployee(){
    let name=prompt("nhập tên");
    let position= prompt("vị trí");
    let salary=+prompt("nhập lương");
    // sinh 1 id ngẫu nhiên
    let id= Math.floor(Math.random()*9999943+ new Date().getMilliseconds());
    // tạo đối tượng nhân viên
    let employee= {
        id:id,
        name:name,
        position:position,
        salary:salary
    }
    // sau khi có đối tượng đi thêm đối tượng vào mảng
    employees.push(employee);
    console.log("thêm nhân viên thành công",employees);
 }
 // tạo hàm đi xóa nhân viên theo id
    function deleteEmployee(){
        let id=prompt("nhập id nhân viên muốn xóa");
        // kiểm tra xem có nhân viên trùng id không?
        let findIndex= employees.findIndex(item=>item.id==id);
        if(findIndex!=-1){
            let confirmDelete= confirm("bạn có chắc muốn xóa hay không?");
            if(confirmDelete){
                employees.splice(findIndex,1);
                console.log("xóa thành công",employees);
            }
        }else{
            console.log("không tìm thấy nhân viên có id là: ",id);
        }
    }
    // tạo hàm cập nhật lương theo id
    function updateSalary(){
        let id=prompt("nhập id nhân viên muốn cập nhật lương");
        // kiểm tra xem có nhân viên trùng id không?
        let findIndex= em.findIndex(item=>item.id==id);
        if(findIndex!=-1){  
            let newSalary= +prompt("mời nhập mức lương muốn cập nhật");
            employees[findIndex].salary= newSalary;
        }else{
            console.log("không tìm thấy nhân viên có id là: ",id);
        }
    }
    // function tìm kiếm nhân viên theo tên
    function findUserByName() {
        let nameUser= prompt("mời nhập tên muốn tìm kiếm");
        let result= employees.filter(item=>item.name.incudes(nameUser));
        if(result.length==0){
            console.log("không có nhân viên!");
        }else{
            console.log(result);
        }

    }