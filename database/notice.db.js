/**
 * @notice {id: number, title: string, nor: string, dov :  string tov : }
 */
// 유저 더미데이터
const notices = [
  { id: 1, title: '안녕하세요 재가봉사 모집합니다', content : '아 내용작성 하세용!!', region :'중구' , nor: '11', dov: '2020-10-01', tov: '11:00:00' , dod:'2020-10-01' },
  { id: 2, title: '안녕하세요 재가봉사 모집합니다',content : '아 내용작성 하세용!!', region :'중구' , nor: '12', dov: '2020-10-02', tov: '12:00:00' , dod:'2020-10-02' },
  { id: 3, title: '안녕하세요 재가봉사 모집합니다',content : '아 내용작성 하세용!!', region :'중구' , nor: '13', dov: '2020-10-03', tov: '13:00:00'  , dod:'2020-10-03'},
  { id: 4, title: '안녕하세요 재가봉사 모집합니다',content : '아 내용작성 하세용!!', region :'중구' , nor: '14', dov: '2020-10-04', tov: '14:00:00' , dod:'2020-10-04' },
  { id: 5, title: '안녕하세요 재가봉사 모집합니다',content : '아 내용작성 하세용!!', region :'중구' , nor: '15', dov: '2020-10-05', tov: '15:00:00'  , dod:'2020-10-05'},
  { id: 6, title: '안녕하세요 재가봉사 모집합니다',content : '아 내용작성 하세용!!', region :'중구' , nor: '16', dov: '2020-10-06', tov: '16:00:00'  , dod:'2020-10-06'},
  { id: 7, title: '안녕하세요 재가봉사 모집합니다.',content : '아 내용작성 하세용!!', region :'중구' , nor: '17', dov: '2020-10-07', tov: '17:00:00'  , dod:'2020-10-07'},
  { id: 8, title: '안녕하세요 재가봉사 모집합니다.',content : '아 내용작성 하세용!!', region :'중구' , nor: '18', dov: '2020-10-08', tov: '18:00:00'  , dod:'2020-10-08'},
  { id: 9 , title: '안녕하세요 재가봉사 모집합니다.',content : '아 내용작성 하세용!!', region :'중구' , nor: '19', dov: '2020-10-09', tov: '19:00:00'  , dod:'2020-10-09'},
];

// 유저 하나 조회하기 (아이디)
const getNotice = (noticeId) => notices.find((notice) => notice.id === noticeId);

// 유저 6개씩 조회하기 (아이디)
const getsix = (numPage) => notices.filter((notice) => notice.id > numPage * 6 && notice.id <= (numPage + 1) * 6);

//post data
const addData = (data) => notices.push(data);
//id몇개있는지 알려주기(  
const idNum = notices.length;


// 0 -> 0 (123456) 6
// 1 -> 6 (789101112) 12
// x -> x*6 () (x+1)*6

module.exports = {
  notices,
  getNotice,
  getsix,
  addData,
  idNum,
  
};
