class NavigationUtil {
  static resetToHomePage(params: any) {
    const { navigation } = params;
    navigation.navigate('HomePage');
  }
}

export default NavigationUtil;
