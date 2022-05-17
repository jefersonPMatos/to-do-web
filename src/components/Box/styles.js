import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 justify-content: ${ props => props.jc || 'auto'};
 align-content: ${ props => props.ac || 'auto'} ;
 align-items: ${ props => props.ai || 'auto'} ;
 width: ${ props => props.w || 'auto'} ;
 height: ${ props => props.h || 'auto'} ;
 padding-top: ${ props => props.pt } ;
 padding-left: ${ props => props.pl } ;
 padding-right: ${ props => props.pr } ;
 padding-bottom: ${ props => props.pb } ;
 margin-top: ${ props => props.mt } ;
 margin-left: ${ props => props.ml };
 margin-right: ${ props => props.mr };
 margin-bottom: ${ props => props.mb };
`;

export { Container };