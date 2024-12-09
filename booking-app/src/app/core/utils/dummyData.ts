import { SelectItem, SelectItemGroup } from "primeng/api"
import { USER_ROLE } from "./constant"
import { statusObject } from "./helper"
import { IAccount, IStudentProfile } from "../interfaces/account.interface"
import { SELECTBUTTON } from "../interfaces/anonymous.interface"
import { TABTABLEUSER } from "../config/tableUser.config"
import { ItableColumn, ITableItem } from "../interfaces/table.interface"

  //semester
  export const semesters: SelectItem[] = [
    { label: 'Khoá 16', value: 'k16' },
    { label: 'Khóa 17', value: 'k17' },
    { label: 'Khóa 18', value: 'k18' },
    { label: 'Khóa 19', value: 'k19' },
    { label: 'Khóa 20', value: 'k20' }
  ]

  //gender
  export const genders: SelectItem[] = [
    { label: 'nam', value: 'male' },
    { label: 'nữ', value: 'female' },
  ]

  //address

  export const provinces: SelectItemGroup[] = [
    {
      label: 'Hà Nội',
      value: 'hn',
      items: [
        { label: 'Ba Đình', value: 'bd' },
        { label: 'Hoàn Kiếm', value: 'hk' },
        { label: 'Tây Hồ', value: 'th' },
        { label: 'Long Biên', value: 'lb' },
        { label: 'Cầu Giấy', value: 'cg' },
        { label: 'Đống Đa', value: 'dd' },
        { label: 'Hai Bà Trưng', value: 'hbt' },
        { label: 'Hoàng Mai', value: 'hm' },
        { label: 'Thanh Xuân', value: 'tx' },
        { label: 'Sóc Sơn', value: 'ss' },
        { label: 'Đông Anh', value: 'da' },
        { label: 'Gia Lâm', value: 'gl' },
        { label: 'Nam Từ Liêm', value: 'ntl' },
        { label: 'Bắc Từ Liêm', value: 'btl' },
        { label: 'Hà Đông', value: 'hd' },
        { label: 'Sơn Tây', value: 'st' },
        { label: 'Ba Vì', value: 'bv' },
        { label: 'Chương Mỹ', value: 'cm' },
        { label: 'Đan Phượng', value: 'dp' },
        { label: 'Hoài Đức', value: 'hd' },
        { label: 'Mỹ Đức', value: 'md' },
        { label: 'Phúc Thọ', value: 'pt' },
        { label: 'Thạch Thất', value: 'tt' },
        { label: 'Thanh Oai', value: 'to' },
        { label: 'Thanh Trì', value: 'tt' },
        { label: 'Từ Liêm', value: 'tl' }
      ]
    },
    {
      label: 'Hà Giang',
      value: 'hg',
      items: [
        { label: 'Hà Giang', value: 'hg' },
        { label: 'Đồng Văn', value: 'dv' },
        { label: 'Mèo Vạc', value: 'mv' },
        { label: 'Yên Minh', value: 'ym' },
        { label: 'Quản Bạ', value: 'qb' },
        { label: 'Vị Xuyên', value: 'vx' },
        { label: 'Bắc Mê', value: 'bm' },
        { label: 'Bắc Quang', value: 'bq' },
        { label: 'Hoàng Su Phì', value: 'hsp' },
        { label: 'Xín Mần', value: 'xm' }
      ]
    },
    {
      label: 'Cao Bằng',
      value: 'cb',
      items: [
        { label: 'Cao Bằng', value: 'cb' },
        { label: 'Bảo Lạc', value: 'bl' },
        { label: 'Bảo Lâm', value: 'bl' },
        { label: 'Hạ Lang', value: 'hl' },
        { label: 'Hòa An', value: 'ha' },
        { label: 'Nguyên Bình', value: 'nb' },
        { label: 'Thạch An', value: 'ta' },
        { label: 'Quảng Uyên', value: 'qu' },
        { label: 'Trùng Khánh', value: 'tk' },
        { label: 'Phục Hòa', value: 'ph' }
      ]
    },
    {
      label: 'Bắc Kạn',
      value: 'bk',
      items: [
        { label: 'Bắc Kạn', value: 'bk' },
        { label: 'Ba Bể', value: 'bb' },
        { label: 'Bạch Thông', value: 'bt' },
        { label: 'Chợ Đồn', value: 'cd' },
        { label: 'Chợ Mới', value: 'cm' },
        { label: 'Na Rì', value: 'nr' },
        { label: 'Ngân Sơn', value: 'ns' },
        { label: 'Pác Nặm', value: 'pn' }
      ]
    },
    {
      label: 'Tuyên Quang',
      value: 'tq',
      items: [
        { label: 'Tuyên Quang', value: 'tq' },
        { label: 'Chiêm Hóa', value: 'ch' },
        { label: 'Hàm Yên', value: 'hy' },
        { label: 'Na Hang', value: 'nh' },
        { label: 'Sơn Dương', value: 'sd' },
        { label: 'Yên Sơn', value: 'ys' }
      ]
    },
    {
      label: 'Lào Cai',
      value: 'lc',
      items: [
        { label: 'Lào Cai', value: 'lc' },
        { label: 'Bát Xát', value: 'bx' },
        { label: 'Mường Khương', value: 'mk' },
        { label: 'Sa Pa', value: 'sp' },
        { label: 'Văn Bàn', value: 'vb' },
        { label: 'Simacai', value: 'sm' }
      ]
    },
    {
      label: 'Hưng Yên',
      value: 'hy',
      items: [
        { label: 'Hưng Yên', value: 'hy' },
        { label: 'Ân Thi', value: 'at' },
        { label: 'Khoái Châu', value: 'kc' },
        { label: 'Kim Động', value: 'kd' },
        { label: 'Mỹ Hào', value: 'mh' },
        { label: 'Phù Cừ', value: 'pc' },
        { label: 'Tiên Lữ', value: 'tl' },
        { label: 'Văn Lâm', value: 'vl' },
        { label: 'Văn Giang', value: 'vg' },
        { label: 'Yên Mỹ', value: 'ym' }
      ]
    },
    {
      label: 'Thái Bình',
      value: 'tb',
      items: [
        { label: 'Thái Bình', value: 'tb' },
        { label: 'Hưng Hà', value: 'hh' },
        { label: 'Quỳnh Phụ', value: 'qp' },
        { label: 'Tiền Hải', value: 'th' },
        { label: 'Vũ Thư', value: 'vt' }
      ]
    },
    {
      label: 'Nam Định',
      value: 'nd',
      items: [
        { label: 'Nam Định', value: 'nd' },
        { label: 'Giao Thủy', value: 'gt' },
        { label: 'Hải Hậu', value: 'hh' },
        { label: 'Mỹ Lộc', value: 'ml' },
        { label: 'Nam Trực', value: 'nt' },
        { label: 'Nghĩa Hưng', value: 'nh' },
        { label: 'Trực Ninh', value: 'tn' },
        { label: 'Xuân Trường', value: 'xt' },
        { label: 'Vụ Bản', value: 'vb' }
      ]
    },
    {
      label: 'Ninh Bình',
      value: 'nb',
      items: [
        { label: 'Ninh Bình', value: 'nb' },
        { label: 'Gia Viễn', value: 'gv' },
        { label: 'Hoa Lư', value: 'hl' },
        { label: 'Kim Sơn', value: 'ks' },
        { label: 'Nho Quan', value: 'nq' },
        { label: 'Yên Khánh', value: 'yk' },
        { label: 'Yên Mô', value: 'ym' }
      ]
    },
    {
      label: 'Thanh Hóa',
      value: 'th',
      items: [
        { label: 'Thanh Hóa', value: 'th' },
        { label: 'Bỉm Sơn', value: 'bs' },
        { label: 'Hoằng Hóa', value: 'hh' },
        { label: 'Hậu Lộc', value: 'hl' },
        { label: 'Mường Lát', value: 'ml' },
        { label: 'Mường Khương', value: 'mk' },
        { label: 'Ngọc Lặc', value: 'nl' },
        { label: 'Ngọc Sơn', value: 'ns' },
        { label: 'Như Thanh', value: 'nt' },
        { label: 'Như Xuân', value: 'nx' },
        { label: 'Quan Hóa', value: 'qh' },
        { label: 'Quảng Xương', value: 'qx' },

      ]
    }
  ]

  //major
  export const majors: SelectItemGroup[] = [
    {
      label: 'Công nghệ thông tin',
      value: 'it',
      items: [
        {
          label: 'Kỹ thuật phần mềm',
          value: 'se' 
        },
        {
          label: 'Hệ thống thông tin',
          value: 'is'
        },
        {
          label: 'An toàn thông tin',
          value: 'ia'
        },
        {
          label: 'Trí tuệ nhân tạo',
          value: 'ai'
        },
        {
          label: 'Thiết kế mỹ thuật số',
          value: 'dd'
        },
        {
          label: 'Công nghệ ô tô số',
          value: 'dat'
        },
        {
          label: 'Thiết kế vi mạch bán dẫn',
          value: 'sd'
        },
      ]
    },
    {
      label: 'Quản trị kinh doanh',
      value: 'ba',
      items: [
        {
          label:'Digital Marketing',
          value: 'dm'
        },
        {
          label:'Kinh doanh quốc tế',
          value: 'bi'
        },
        {
          label:'Tài chính',
          value: 'fin'
        },
        {
          label:'Logistics và quản lý chuỗi cung ứng',
          value: 'lscm'
        },
        {
          label:'Quản trị khách sạn',
          value: 'hm'
        },
        {
          label:'Quản trị dịch vụ du lịch và lữ hành',
          value: 'tatsm'
        },
      ]
    },
    //thiếu 
    {
      label: 'Ngôn ngữ',
      value: 'la',
      items: [
        {
          label:'Ngôn ngữ Anh',
          value: ''
        },
        {
          label:'Ngôn ngữ Hàn',
          value: ''
        },
        {
          label:'Ngôn ngữ Nhật',
          value: ''
        },
        {
          label:'Ngôn ngữ Trung quốc',
          value: ''
        },
      ]
    },
    {
      label: 'Công nghệ truyền thông',
      value: 'ct',
      items: [
        {
          label:'Truyền thông đa phương tiện',
          value: 'mc'
        },
        {
          label:'Quan hệ công chúng',
          value: 'pr'
        },
        
      ]
    }
  ]

  //status
  export const status: SelectItem[] = [
    {
      label: 'hoạt động',
      value:'active'
    },
    {
      label: 'Cấm',
      value:'ban'
    },
    {
      label: 'Không hoạt động',
      value:'diactive'
    },
  ]

//   info user table



  export const demoUser: IAccount<IStudentProfile> = {
    name: "Nguyễn Văn A",
    address: "Bắc Ninh",
    email: "namnhhe161918@fpt.edu.vn",
    phone: '0327033756',
    role: USER_ROLE.STUDENT,
    isActive: true,
    status: true,
    avatar: 'assets/users/user-6.jpg',
    profile: {
      major: "Kỹ thuật phần mềm",
      graduationYear: 2024,
      keyYear: 'K16',
      codeStudent: "HE161918"
    }
  }
  export const  tabSelectButton: SELECTBUTTON[] = [
    {
      label: 'Xem tất cả',
      value: TABTABLEUSER.ALL
    },
    {
      label: USER_ROLE.STUDENT,
      value: TABTABLEUSER.STUDENT
    },
    {
      label: USER_ROLE.STAFF,
      value: TABTABLEUSER.EMPLOYEE
    },
    {
      label: USER_ROLE.HEADSTAFF,
      value: TABTABLEUSER.MANAGER
    },
  ]
 

  export const data: ITableItem[] = [
    {
      id: '1',
      name: 'Ngô Hữu Nam',
      email: 'namnhhe161918@fpt.edu.vn',
      phone: '0327033756',
      code: 'HE161918',
      gender: 'nam',
      dateJoin: '08-08-2024',
      role: USER_ROLE.STUDENT,
      status: statusObject(true)
    },
    {
      id: '2',
      name: 'Trần Thị Mai',
      email: 'maitt123456@fpt.edu.vn',
      phone: '0312345678',
      code: 'HE123456',
      gender: 'nữ',
      dateJoin: '15-07-2023',
      role: USER_ROLE.STUDENT,
      status: statusObject(true)
    },
    {
      id: '3',
      name: 'Lê Văn Hải',
      email: 'haile123456@fpt.edu.vn',
      phone: '0345678901',
      gender: 'nam',
      dateJoin: '22-09-2022',
      role: USER_ROLE.STAFF,
      status: statusObject(true)
    },
    {
      id: '4',
      name: 'Phạm Thị Hồng',
      email: 'hongpt234567@fpt.edu.vn',
      phone: '0356789012',
      gender: 'nữ',
      dateJoin: '12-10-2021',
      role: USER_ROLE.HEADSTAFF,
      status: statusObject(true)
    },
    {
      id: '5',
      name: 'Nguyễn Văn An',
      email: 'an.nv123456@fpt.edu.vn',
      phone: '0367890123',
      code: 'HE345678',
      gender: 'nam',
      dateJoin: '30-06-2022',
      role: USER_ROLE.STUDENT,
      status: statusObject(true)
    },
    {
      id: '6',
      name: 'Đặng Thị Bích',
      email: 'bichdt345678@fpt.edu.vn',
      phone: '0378901234',
      gender: 'nữ',
      dateJoin: '25-12-2020',
      role: USER_ROLE.STAFF,
      status: statusObject(true)
    },
    {
      id: '7',
      name: 'Vũ Văn Sơn',
      email: 'sonvu456789@fpt.edu.vn',
      phone: '0389012345',
      gender: 'nam',
      dateJoin: '03-04-2019',
      role: USER_ROLE.HEADSTAFF,
      status: statusObject(true)
    },
    {
      id: '8',
      name: 'Lương Thị Thúy',
      email: 'thuylt567890@fpt.edu.vn',
      phone: '0390123456',
      code: 'HE678901',
      gender: 'nữ',
      dateJoin: '18-05-2021',
      role: USER_ROLE.STUDENT,
      status: statusObject(true)
    },
    {
      id: '9',
      name: 'Bùi Văn Hưng',
      email: 'hungbv678901@fpt.edu.vn',
      phone: '0311234567',
      gender: 'nam',
      dateJoin: '14-11-2021',
      role: USER_ROLE.STAFF,
      status: statusObject(true)
    },
    {
      id: '10',
      name: 'Nguyễn Thị Lan',
      email: 'lan.nguyen789012@fpt.edu.vn',
      phone: '0322345678',
      gender: 'nữ',
      dateJoin: '07-08-2022',
      role: USER_ROLE.HEADSTAFF,
      status: statusObject(true)
    }
  ];

  export const columns: ItableColumn[] = [
    { field: 'name', header: 'Tên', sortable: true },
    { field: 'email', header: 'Email', sortable: true },
    // { field: 'phone', header: 'Số điện thoại', sortable: false },
    { field: 'code', header: 'Mã sinh viên', sortable: true },
    { field: 'gender', header: 'Giới tính', sortable: true },
    // { field: 'dateJoin', header: 'Ngày tham gia', sortable: false },
    { field: 'role', header: 'vai trò', sortable: true },
    { field: 'status', header: 'Trạng thái', sortable: true },
  ];