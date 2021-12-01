export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('no $root provided from DomListener');
    }
    this.$root = $root;
  }
}
