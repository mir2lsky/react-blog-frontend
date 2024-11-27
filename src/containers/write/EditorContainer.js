import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import Editor from '../../components/write/Editor';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  // 언마운트될때 초기화
  // TODO: 수정버튼으로 들어올때도 호출되어 내용을 다 지우므로 일단 주석처리
  // useEffect(() => {
  //   return () => {
  //     dispatch(initialize());
  //   };
  // }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
