// import request from 'umi-request';
// import { async } from 'q';

let list = [
  {
    href: '/dashboard/analysis',
    langId: 'menu.dashboard.analysis',
    msg: 'analysis',
  },
  {
    href: '/patrol/task',
    langId: 'menu.patrol.task',
    msg: 'task',
  },
  {
    href: '/patrol/plan',
    langId: 'menu.patrol.plan',
    msg: 'plan',
  },
];
export async function getFavMenus() {
  return {
    success: true,
    data: list,
  };
}
export async function addFavMenu(menu) {
  // console.log('add', menu, list.length);
  if (list.find(m => m.href === menu.href) === undefined) {
    list.push(menu);
  }
  return {
    success: true,
    data: list.slice(),
  };
}
export async function removeFavMenu(menu) {
  list = list.filter(m => m.href !== menu.href);
  return {
    success: true,
    data: list,
  };
}
