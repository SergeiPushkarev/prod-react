import { classNames } from "shared/lib/ClassNames/ClassNames"

describe('classNames', ()=>{
  test('with only 1st param', ()=>{
    expect(classNames('smStr',{},[])).toBe('smStr')
  });
  test('with additional class', () => {
    const exp = 'smStr class1 class2';
    expect(classNames('smStr', {}, ['class1', 'class2'])).toBe(exp)
  });
  test('with mods', () => {
    const exp = 'smStr class1 class2 hovered scrollable';
    expect(classNames('smStr', {hovered:true, scrollable:true}, ['class1', 'class2'])).toBe(exp)
  });
  test('with mods with false', () => {
    const exp = 'smStr class1 class2 hovered';
    expect(classNames('smStr', {hovered:true, scrollable:false}, ['class1', 'class2'])).toBe(exp)
  });
  test('with mods undef', () => {
    const exp = 'smStr class1 class2 hovered';
    expect(classNames('smStr', {hovered:true, scrollable:undefined}, ['class1', 'class2'])).toBe(exp)
  });
})