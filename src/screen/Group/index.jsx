import { View } from 'react-native';
import styled from 'styled-components/native';

export default function Group() {
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems:'center',}}>
            <Titulo>
                teste
            </Titulo>
        </View>
    );
}

export const Titulo = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN_700};
  font-size: 28px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;